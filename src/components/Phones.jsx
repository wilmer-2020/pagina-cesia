import CardPhone from "../layouts/CardPhone"
import phone from '../assets/phone1.jpeg'
import iphone2 from '../assets/iphon2.jpeg'
import iphone3 from '../assets/iphone3.jpeg'
import iphone4 from '../assets/iphone4.jpeg'
import iphone5 from '../assets/iphone5.jpeg'
import iphone10 from '../assets/iphone10.jpeg'


const Phones = () => {
  return (
    <section className="phone-container">
       <CardPhone name={'iphone 13 Pro Max'} img={phone} price={'21,500'} description={''}/>
       <CardPhone name={'iphone 8 Plus'} img={iphone2} price={'4,900'} description={''}/>
       <CardPhone name={'iphone 12 Pro Max'} img={iphone3} price={'16,500'} description={''}/>
       <CardPhone name={'iphone X'} img={iphone4} price={'6,500'} description={''}/>
       <CardPhone name={'iphone XS'} img={iphone5} price={'7000'} description={''}/>
       <CardPhone name={'iphone 14 Pro Max'} img={iphone10} price={'26,000'} description={''}/>

    </section>
  )
}

export default Phones