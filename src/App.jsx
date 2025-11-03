import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Read from './components/Read'
import Create from './components/Create'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App