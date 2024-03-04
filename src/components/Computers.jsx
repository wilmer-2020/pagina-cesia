import CardPc from "../layouts/CardPc"
import img1 from '../assets/pc1.jpeg'
import img2 from '../assets/pc2.jpeg'
import img3 from '../assets/pc3.jpeg'
const Computers = () => {
  return (
    <section className="PC-containers">
        <CardPc 
         img1={img1}
         img2={img2}
         img3={img3}
         title={'LO MEJOR DE LA LINEA DELL'}
         text={'En el mundo tecnológico, la excelencia es sinónimo de Dell. Desde el diseño hasta el rendimiento, cada computadora Dell está diseñada para superar tus expectativas y llevarte más allá de los límites de la productividad y la creatividad.'}
        />
    </section>
  )
}

export default Computers