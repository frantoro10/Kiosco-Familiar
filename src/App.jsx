
// Router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { ProductsProvider } from './contexts/ProductsContext';
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {


  return (
    <Router>
    <ProductsProvider>                                    
    <MainLayout>
    <Home/>
    </MainLayout>
    </ProductsProvider>  
    </Router>
    
  )
}

export default App
