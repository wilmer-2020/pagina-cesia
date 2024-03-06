import IconShop from "../layouts/IconShop";
import { Input } from '@chakra-ui/react';
import { useState} from "react";
import IphoneHeader from "../layouts/IphoneHeader";
import ModalWhatsapp from "../layouts/Modal";



const Header = () => {
    const [colorNav, setColorNav] = useState('');

    const changeColor = () => {
        if (window.scrollY >= 30) {
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
        <div className="text-header">
        <h3>NETTEC</h3>
        <p>Desde los últimos modelos de las marcas más reconocidas,
         nuestra selección de teléfonos es incomparable. 
        Ya sea que busques características avanzadas,
         un diseño elegante o un rendimiento excepcional, 
         tenemos el teléfono perfecto para ti a los mejores precios de la zona</p>
        <ModalWhatsapp/>
        </div>
        <IphoneHeader/>

    </header>
 </>
    
  )
}

export default Header