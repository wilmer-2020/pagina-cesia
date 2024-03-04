import IconShop from "../layouts/IconShop";
import { Input } from '@chakra-ui/react';
import { useState} from "react";

const Header = () => {
    const [colorNav, setColorNav] = useState('');

    const changeColor = () => {
        if (window.scrollY >= 270) {
          setColorNav('#0c0b0b')
        }else{
          setColorNav('transparent')
        }
     
      }

      window.addEventListener("scroll",changeColor)
  return (
 <>
       <header>
        <nav style={{
      backgroundColor:colorNav
    }}>
        <h1>NETTEC</h1>
        <Input size='md' 
        variant='outline' 
        placeholder="Buscar Producto" 
        className="input-search"
        _placeholder={{ color: 'inherit' }}
        />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#sucursales">Sucursales</a></li>
                <li><a href="#contact">Contactanos</a></li>
                <a href="#"><IconShop/></a>
            </ul>
        </nav>
    </header>
 </>
    
  )
}

export default Header