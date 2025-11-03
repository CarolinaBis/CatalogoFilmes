import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function Read() {
  const { id } = useParams()
  const [filme, setFilme] = useState(null)
  const [loading, setLoading] = useState(true)
  const API_URL = 'https://68fe91307c700772bb14009c.mockapi.io/filmes'

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => {
        setFilme(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="loading">
        <div style={{fontSize: '64px', marginBottom: '16px'}}>🎬</div>
        <div>Carregando detalhes do filme...</div>
      </div>
    )
  }

  if (!filme) {
    return (
      <div>
        <h2>Filme Não Encontrado</h2>
          <p>O filme solicitado não foi encontrado.</p>
          <Link to="/" className="btn btn-primary">
            Voltar ao Catálogo
          </Link>
        </div>
    )
  }

  return (
    <div>
      <h2>Detalhes do Filme</h2>
      <div className="filme-detalhes">
        <div className="filme-detalhes-header">
          <div className="filme-detalhes-poster">🎭</div>
          <h3 style={{margin: 0, fontSize: '1.5rem', color: '#2c3e50'}}>{filme.nome}</h3>
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

        <div style={{display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap'}}>
          <Link to="/" className="btn btn-primary">Voltar ao Catálogo</Link>
          <Link to="/update" className="btn btn-secondary">Editar Filme</Link>
        </div>
      </div>
    </div>
  )
}

export default Read