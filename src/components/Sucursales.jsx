import Map from "../layouts/Map"
import banner1 from '../assets/banner1.jpeg'
import banner2 from '../assets/banner.jpeg'
import location from '../assets/location.svg'
const Sucursales = () => {
  return (
    <section className="sucursales-container" id="sucursales">
    <h2>NUESTRAS TIENDAS<img src={location} alt="" /></h2>
    <article className="sucursal">
        <img src={banner1} alt="" />
        <Map URL={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4695.296783815375!2d-87.64068028291467!3d14.447014427373924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI2JzQ1LjMiTiA4N8KwMzgnMTQuMCJX!5e0!3m2!1ses!2shn!4v1709587129207!5m2!1ses!2shn'}/>
    </article>
      <article className="sucursal">
      <Map URL={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3865.8007436478374!2d-87.68630602489915!3d14.323003786131121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDE5JzIyLjgiTiA4N8KwNDEnMDEuNCJX!5e0!3m2!1ses!2shn!4v1709587907877!5m2!1ses!2shn'}/>
        <img src={banner2} alt=""/>
      </article>
    </section>
  )
}

export default Sucursales