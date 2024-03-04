import IconShop from "../layouts/IconShop";
import { Input } from '@chakra-ui/react';
const Header = () => {
  return (
 <>
       <header>
        <nav>
        <h1>NETTEC</h1>
        <Input size='md' 
        variant='outline' 
        placeholder="Buscar Producto" 
        className="input-search"
        _placeholder={{ color: 'inherit' }}
        />
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Sucursales</a></li>
                <li><a href="">Contactanos</a></li>
                <a href=""><IconShop/></a>
            </ul>
        </nav>
    </header>
 </>
    
  )
}

export default Header