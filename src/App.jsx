
import { ProductsProvider } from './contexts/ProductsContext';
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ProductsProvider>
    <MainLayout>
    <Home/>
    </MainLayout>
    </ProductsProvider>  
    </>
  )
}

export default App
