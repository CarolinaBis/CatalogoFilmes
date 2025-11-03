# Catálogo de Filmes 

## Descrição do Projeto

Sistema web moderno para gerenciamento de catálogo de filmes, desenvolvido em React com operações CRUD completas (Create, Read, Update, Delete). A aplicação permite cadastrar, visualizar, editar e excluir filmes de forma intuitiva e responsiva.

## Funcionalidades

- **Listagem de Filmes** - Visualização em grid dos filmes cadastrados
- **Adicionar Filmes** - Formulário para cadastro de novos filmes
- **Visualizar Detalhes** - Página dedicada com informações completas do filme
- **Editar Filmes** - Sistema de busca por ID e edição de dados
- **Excluir Filmes** - Remoção segura com confirmação

## Tecnologias Utilizadas

- **Frontend:** React 18 + Vite
- **Roteamento:** React Router DOM
- **Estilização:** CSS3 com Variáveis CSS
- **HTTP Client:** Axios
- **API:** MockAPI (API REST simulada)
- **UI Components:** Bootstrap (apenas CSS)

## Estrutura do Projeto

```
src/
├── App.jsx                 # Componente principal com rotas
├── App.css                # Estilos globais e variáveis CSS
├── main.jsx               # Ponto de entrada da aplicação
├── index.css              # Reset e estilos base
├── components/
│   ├── Menu.jsx           # Componente de navegação
│   ├── Menu.css           # Estilos do menu
│   ├── Home.jsx           # Página inicial com listagem
│   ├── Create.jsx         # Página de criação
│   ├── Read.jsx           # Página de detalhes
│   ├── Update.jsx         # Página de edição
│   └── Delete.jsx         # Página de exclusão
```

## API Integration

**Endpoint Base:** `https://68fe91307c700772bb14009c.mockapi.io/filmes`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Busca filme por ID |
| POST | `/filmes` | Cria novo filme |
| PUT | `/filmes/:id` | Atualiza filme |
| DELETE | `/filmes/:id` | Exclui filme |

## Instalação e Execução

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd catalogo-filmes

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview do build

## Componentes Principais

### Menu
Navegação fixa no topo com links para todas as funcionalidades.

### Home
- Grid responsivo de filmes
- Contador de itens
- Estados de loading e erro
- Empty state quando não há filmes

### Create
Formulário de cadastro com validação:
- Nome do filme
- Gênero
- Ano de lançamento

### Read
Visualização detalhada com:
- Poster placeholder
- Informações completas
- Links de navegação

### Update
Sistema em duas etapas:
1. Busca por ID
2. Edição dos dados

### Delete
Processo seguro com:
- Confirmação obrigatória
- Visualização prévia dos dados
- Proteção contra exclusão acidental
