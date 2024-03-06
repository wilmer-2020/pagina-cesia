import CardPhone from "../layouts/CardPhone"
import phone from '../assets/phone1.jpeg'
import iphone2 from '../assets/iphon2.jpeg'
import iphone3 from '../assets/iphone3.jpeg'
import iphone4 from '../assets/iphone4.jpeg'
import iphone5 from '../assets/iphone5.jpeg'
import iphone10 from '../assets/iphone10.jpeg'
import samsung1 from '../assets/samsung1.jpeg'
import samsung2 from '../assets/samsung2.jpeg'
import samsung3 from '../assets/samsumg3.jpeg'
import samsung4 from '../assets/samsumg4.jpg'
import samsung5 from '../assets/samsumg6.jpeg'
import samsung7 from '../assets/samsung8.jpeg'
import pixel1 from '../assets/pixel1.jpeg'
import pixel2 from '../assets/pixel2.jpeg'


const Phones = () => {
  return (
    <section className="phone-container">
       <CardPhone name={'iphone 13 Pro Max'} img={phone} price={'21,500'} />
       <CardPhone name={'iphone 8 Plus'} img={iphone2} price={'4,900'} description={''}/>
       <CardPhone name={'iphone 12 Pro Max'} img={iphone3} price={'16,500'} description={''}/>
       <CardPhone name={'iphone X'} img={iphone4} price={'6,500'} description={''}/>
       <CardPhone name={'iphone 9'} img={iphone5} price={'7000'} description={''}/>
       <CardPhone name={'iphone XS'} img={iphone10} price={'9000'} description={''}/>
       <CardPhone name={'Samsung S20+5G'} img={samsung1} price={'10,000'} description={''}/>
       <CardPhone name={'Samsung Note 20 Ultra'} img={samsung2} price={'12,800'} description={''}/>
       <CardPhone name={'Samsung A13'} img={samsung3} price={'3700'} description={''}/>
       <CardPhone name={'Samsung S22+'} img={samsung4} price={'11,300'} description={''}/>
       <CardPhone name={'Samsung S20 5G'} img={samsung5} price={'5900'} description={''}/>
       <CardPhone name={'Samsung S22 Ultra'} img={samsung7} price={'15,500'} description={''}/>
       <CardPhone name={'Goggle Pixel 7 Pro'} img={pixel1} price={'7,500'} description={''}/>
       <CardPhone name={'Google Pixel 6 Pro'} img={pixel2} price={'6,000'} description={''}/>

    </section>
  )
}

export default Phones