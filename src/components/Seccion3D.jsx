import Spline from '@splinetool/react-spline';
import Phones from '../components/Phones'

const Seccion3D = () => {
  return (
    <section className='item-seccion'>

        <article className='phone-seccion'>
        <div className="phone-obj">
        <Spline scene="https://prod.spline.design/U2VEJ37wChlZEB8X/scene.splinecode" className=' obj3D iphone'/>
        </div>
        <div className="phone-text">
            <h2>tenenmos los mejores precios y las mejores calidades en telefonos</h2>
        </div>
        </article>

        <Phones/>

        <article className='PC-seccion'>
        <div className="PC-text">
            <h2>tenenmos los mejores precios y las mejores calidades en computadoras</h2>
        </div>
        <div className="PC-obj">
        <Spline  scene="https://prod.spline.design/REeAizBEalM67SVA/scene.splinecode" className=' obj3D PC'/>
        </div>
        </article>

    </section>
  )
}

export default Seccion3D