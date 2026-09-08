import LogoOne from '../assets/images/logos/logoipsum-1.svg'
import LogoTwo from '../assets/images/logos/logoipsum-2.svg'
import LogoThree from '../assets/images/logos/logoipsum-3.svg'
import LogoFour from '../assets/images/logos/logoipsum-4.svg'
import LogoFive from '../assets/images/logos/logoipsum-5.svg'
import LogoSix from '../assets/images/logos/logoipsum-6.svg'

const SponsorSection = () => {
  return (
    <div className='flex items-center justify-center gap-6 py-6'>
      <div className='sponsor-logo'>
        <img src={LogoOne} alt='Logo One' />
      </div>
      <div className='sponsor-logo'>
        <img src={LogoTwo} alt='Logo Two' />
      </div>      
      <div className='sponsor-logo'>
        <img src={LogoThree} alt='Logo Three' />
      </div>      
      <div className='sponsor-logo'>
        <img src={LogoFour} alt='Logo Four' />
      </div>
      <div className='sponsor-logo'>
        <img src={LogoFive} alt='Logo Five' />
      </div>
      <div className='sponsor-logo'>
        <img src={LogoSix} alt='Logo Six' />
      </div>
    </div>
  )
}

export default SponsorSection
