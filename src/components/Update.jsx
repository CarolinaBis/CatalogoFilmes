import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Update() {
  const [idPesquisa, setIdPesquisa] = useState('')
  const [filme, setFilme] = useState(null)
  const [formData, setFormData] = useState({ nome: '', genero: '', ano: '' })
  const [erro, setErro] = useState('')
  const [modoPesquisa, setModoPesquisa] = useState(true)
  const navigate = useNavigate()
  const API_URL = 'https://68fe91307c700772bb14009c.mockapi.io/filmes'

  const pesquisarFilme = () => {
    setErro('')
    if (!idPesquisa.trim()) {
      setErro('Por favor, digite um ID válido.')
      return
    }
    
    axios.get(`${API_URL}/${idPesquisa}`)
      .then(res => {
        setFilme(res.data)
        setFormData(res.data)
        setModoPesquisa(false)
      })
      .catch(() => {
        setErro('Filme não encontrado. Verifique o ID e tente novamente.')
        setFilme(null)
      })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`${API_URL}/${idPesquisa}`, formData)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const voltarPesquisa = () => {
    setModoPesquisa(true)
    setFilme(null)
    setErro('')
    setIdPesquisa('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      pesquisarFilme()
    }
  }

  return (
    <div>
      <h2>Editar Filme</h2>
      
      {modoPesquisa ? (
        <div className="search-box">
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
            padding: '20px',
            background: 'linear-gradient(135deg, #0077b6 0%, #48cae4 100%)',
            borderRadius: '8px',
            color: 'white'
          }}>
            <div style={{fontSize: '48px', marginBottom: '8px'}}>🔍</div>
            <p style={{margin: 0, fontSize: '0.95rem'}}>Digite o ID do filme que deseja editar</p>
          </div>

          <div className="form-group">
            <label>ID do Filme</label>
            <input
              type="text"
              value={idPesquisa}
              onChange={(e) => setIdPesquisa(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite o ID (ex: 1, 2, 3...)"
              autoFocus
            />
          </div>
          {erro && <div className="error-message">{erro}</div>}
          <div style={{display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap'}}>
            <button onClick={pesquisarFilme} className="btn btn-primary">Buscar Filme</button>
            <Link to="/" className="btn btn-secondary">Cancelar</Link>
          </div>
        </div>
      ) : (
        <div>
          {filme && (
            <div className="form-container">
              <div style={{
                textAlign: 'center',
                marginBottom: '24px',
                padding: '16px',
                background: '#e8f4fd',
                borderRadius: '8px',
                border: '2px solid #0077b6'
              }}>
                <strong style={{color: '#0077b6', fontSize: '1rem'}}>
                  Editando: <span style={{color: '#0096c7'}}>#{filme.id}</span> - {filme.nome}
                </strong>
              </div>

              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label>Nome do Filme</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome do filme"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gênero</label>
                  <input
                    type="text"
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    placeholder="Gênero do filme"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Ano de Lançamento</label>
                  <input
                    type="text"
                    name="ano"
                    value={formData.ano}
                    onChange={handleChange}
                    placeholder="Ano de lançamento"
                    required
                  />
                </div>
                <div style={{display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap'}}>
                  <button type="submit" className="btn btn-success">Salvar Alterações</button>
                  <button type="button" onClick={voltarPesquisa} className="btn btn-secondary">Buscar Outro</button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Update