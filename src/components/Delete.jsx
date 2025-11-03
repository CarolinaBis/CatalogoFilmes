import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Delete() {
  const [idPesquisa, setIdPesquisa] = useState('')
  const [filme, setFilme] = useState(null)
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
        setModoPesquisa(false)
      })
      .catch(() => {
        setErro('Filme não encontrado. Verifique o ID e tente novamente.')
        setFilme(null)
      })
  }

  const handleDelete = () => {
    const confirmacao = window.confirm(
      `⚠️ ATENÇÃO!\n\nTem certeza que deseja excluir o filme "${filme.nome}"?\n\nEsta ação não pode ser desfeita.`
    )
    
    if (confirmacao) {
      axios.delete(`${API_URL}/${idPesquisa}`)
        .then(() => navigate('/'))
        .catch(err => {
          console.log(err)
          setErro('Erro ao excluir o filme. Tente novamente.')
        })
    }
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
      <h2>Excluir Filme</h2>
      
      {modoPesquisa ? (
        <div className="search-box">
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
            padding: '20px',
            background: 'linear-gradient(135deg, #e01e37 0%, #641220 100%)',
            borderRadius: '8px',
            color: 'white'
          }}>
            <div style={{fontSize: '48px', marginBottom: '8px'}}>⚠️</div>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              <strong>Atenção:</strong> Esta ação é irreversível
            </p>
          </div>

          <div className="form-group">
            <label>ID do Filme</label>
            <input
              type="text"
              value={idPesquisa}
              onChange={(e) => setIdPesquisa(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite o ID do filme para excluir"
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
            <div className="filme-detalhes">
              <div style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <div style={{fontSize: '80px', opacity: 0.6, marginBottom: '16px'}}>⚠️</div>
              </div>
              
              <div className="warning-box">
                <div style={{fontSize: '32px'}}>🚨</div>
                <strong>Esta ação é permanente e não pode ser desfeita!</strong>
              </div>

              <p>
                <strong>ID:</strong>
                <span>#{filme.id}</span>
              </p>
              <p>
                <strong>Nome:</strong>
                <span>{filme.nome}</span>
              </p>
              <p>
                <strong>Gênero:</strong>
                <span>{filme.genero}</span>
              </p>
              <p>
                <strong>Ano:</strong>
                <span>{filme.ano}</span>
              </p>
              
              <div style={{display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap'}}>
                <button onClick={handleDelete} className="btn btn-danger">Confirmar Exclusão</button>
                <button onClick={voltarPesquisa} className="btn btn-secondary">Buscar Outro</button>
                <Link to="/" className="btn btn-secondary">Cancelar</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Delete