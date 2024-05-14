
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
  <ChakraProvider>
   
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
   
    
  </ChakraProvider>
  </CartContextProvider>
  
)
