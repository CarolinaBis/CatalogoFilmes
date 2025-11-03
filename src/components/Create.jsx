import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
  const [formData, setFormData] = useState({
    nome: '',
    genero: '',
    ano: ''
  })
  const navigate = useNavigate()
  const API_URL = 'https://68fe91307c700772bb14009c.mockapi.io/filmes'

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(API_URL, formData)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2>Adicionar Novo Filme</h2>
      <div className="form-container">
        <div style={{
          textAlign: 'center',
          marginBottom: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '8px',
          color: 'white'
        }}>
          <div style={{fontSize: '48px', marginBottom: '8px'}}>🎬</div>
          <p style={{margin: 0, fontSize: '0.95rem'}}>Preencha os dados do novo filme</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Filme</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: O Poderoso Chefão"
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
              placeholder="Ex: Drama, Ação, Comédia"
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
              placeholder="Ex: 1972"
              required
            />
          </div>
          <div style={{display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap'}}>
            <button type="submit" className="btn btn-success">Adicionar Filme</button>
            <Link to="/" className="btn btn-secondary">Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create