
import iconInstagram from "../assets/instagram.svg";
import iconFacebook from "../assets/facebook.svg";
import iconHome from "../assets/home.svg";
import iconPhone from "../assets/phone.svg";
import iconEmail from "../assets/email.svg";
import iconWhatsApp from "../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
     <section className="footer-header">

     <div className="footer-info">
        <h3>Mas informacion Sobre Nosotros</h3>
        <p>Nos esforzamos por ofrecer terrenos de la más alta calidad, seleccionados cuidadosamente para garantizar su valor y potencial a largo plazo.</p>
        <p>Valoramos la transparencia en todas nuestras transacciones y nos comprometemos a brindarte información clara y precisa en todo momento.</p>
        <p>Tu satisfacción es nuestra máxima prioridad. Nuestro equipo dedicado está aquí para escucharte, responder a tus preguntas y asegurarse de que tengas una experiencia positiva en cada paso del camino.</p>
      </div>

      <div className="footer-sociales">
        <h3>Siguenos</h3>

        <div className="social">
        <img src={iconFacebook} alt="" className="icon-social"/>
          <a href="https://www.facebook.com/nettechnlapaz?mibextid=PlNXYD" target="_blacnk">NECTEC</a>
        </div>

        <div className="social">
          <img src={iconInstagram} alt="" className="icon-social"/>
          <a href="https://www.instagram.com/nettecoutlet?igsh=MTNxZnJqN21qa29kMQ==" target="_blanck">Nettec Outlet</a>
        </div>

        <div className="social">
        <img src={iconWhatsApp} alt="" className="icon-social"/>
          <a href="https://api.whatsapp.com/send?phone=96321981" target="_blacnk">+504 98431209</a>
        </div>

      </div>
      
      <div className="footer-direccion">
        <h3>Encuentranos</h3>

        <div className="social">
        <img src={iconHome} alt="" className="icon-encuentranos"/>
          <p >Comayagua</p>
        </div>
        
        <div className="social">
        <img src={iconPhone} alt="" className="icon-encuentranos"/>
          <p >+504 33557712</p>
        </div>

        <div className="social">
        <img src={iconEmail} alt="" className="icon-encuentranos"/>
          <a href="mailto:aldredomontes1970@gmail.com" style={{color:"#a09787"}}>brisasdelcampo@gmail.com</a>
        </div>
        
      </div>

     </section>

     <section className="footer-derechos">
      <p>2024|Todos los derechos reservados Wilmer Castellanos</p>
     </section>

    </footer>
  )
}

export default Footer