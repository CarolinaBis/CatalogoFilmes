import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)
  const API_URL = 'https://68fe91307c700772bb14009c.mockapi.io/filmes'

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setFilmes(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setErro(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div style={{fontSize: '64px', marginBottom: '16px'}}>🎬</div>
        <div>Carregando catálogo de filmes...</div>
      </div>
    )
  }

  if (erro) {
    return (
      <div>
        <div className="error-message" style={{maxWidth: '600px', margin: '40px auto'}}>
          Erro ao carregar o catálogo. Tente novamente mais tarde.
        </div>
      </div>
    )
  }

  if (filmes.length === 0) {
    return (
      <div>
        <h2>Catálogo de Filmes</h2>
          <p>Nenhum filme cadastrado ainda.</p>
          <Link to="/create" className="btn btn-primary">
            ➕ Adicionar Primeiro Filme
          </Link>
        </div>
    )
  }

  return (
    <div>
      
      
      <div className="info-bar">
        <div className="info-count">
          {filmes.length} {filmes.length === 1 ? 'filme encontrado' : 'filmes encontrados'}
        </div>
        <Link to="/create" className="btn btn-primary" style={{margin: 0}}>
          Adicionar Filme
        </Link>
      </div>

      <div className="filmes-list">
        {filmes.map(filme => (
          <Link to={`/read/${filme.id}`} key={filme.id} className="filme-card">
            <div className="filme-poster">
              🎥
            </div>
            <div className="filme-content">
              <div className="filme-id">ID #{filme.id}</div>
              <h3 className="filme-titulo">{filme.nome}</h3>
              <div className="filme-meta">
                <span className="filme-genero">{filme.genero}</span>
                <span className="filme-ano">{filme.ano}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home