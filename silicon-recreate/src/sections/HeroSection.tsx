
import HeroImage from '../assets/images/app-preview/hero-img.svg'

const HeroSection = () => {
  return (
    <div>
      <div>
        <h1>Manage All Your Money in One App</h1>
        <p>
          We offer you a new generation of the mobile banking.
          Save, spend & manage money in your pocket.
        </p>

        <div>
          <button>App Store</button>
          <button>Google Play</button>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <button>V</button>
          <p>Discover more</p>
        </div>
      </div>
      <img src={HeroImage} alt='Hero' />
    </div>
  )
}

export default HeroSection
