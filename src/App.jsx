
// Router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { ProductsProvider } from './contexts/ProductsContext';
import {CountProvider} from './contexts/CountContext'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {


  return (
    <Router>
    <CountProvider>  
    <ProductsProvider>                                    
    <MainLayout>
    <Home/>
    </MainLayout>
    </ProductsProvider>
    </CountProvider>  
    </Router>
    
  )
}

export default App
