import HealthComp from '../Component/Home/HealthComp'
import PresonalProduct from '../Component/Home/PersonalProduct'
import HomeProdcuts from '../Component/Home/HomeProducts'
import Slideshow from '../Component/Slider'
import Footer from './Footer'

function Home() {
  return (
    <div className="Product-Container">
      <Slideshow/>
      <h2 className="title-text">Shop by health concerns</h2>
      <HealthComp/>
      
      <h2 className="title-text">Vitamins-Suppliments</h2>
      <HomeProdcuts category={"vitamins-suppliments"} />
      <h2 className="title-text">Combo</h2>
      <HomeProdcuts category={"combo"} />
      <h2 className="title-text">Medicine</h2>
      <HomeProdcuts category={"medicine"} />
      <h2  className="title-text">Personal Care </h2>
      <PresonalProduct/>
      <Footer/>
    </div>
  )
}

export default Home
