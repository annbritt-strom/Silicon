
import HeroImage from '../assets/images/app-preview/hero-img.svg'
import AppStoreLogo from '../assets/images/logos/appstore-logo.svg'
import GooglePlayLogo from '../assets/images/logos/googleplay-logo.svg'

const ChevronDownIcon = ({ size = 16 }: { size?: number } = {}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  )
}

const HeroSection = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-brand-gradient opacity-5' />
      <div className='container flex items-center justify-between pt-20 '>
        <div className='flex flex-col gap-10 flex-1'>
          {/* text */}
          <div className='flex flex-col gap-4'>
            <h1>Manage All Your Money in One App</h1>
            <p className='lg-text max-w-sm'>
              We offer you a new generation of the mobile banking.
              Save, spend & manage money in your pocket.
            </p>
          </div>
          {/* download buttons */}
          <div className='flex items-center gap-4'>
            <button className='flex items-center bg-gray-900 rounded-lg px-5 py-3'>
              <img src={AppStoreLogo} alt='Download on the App Store' className='h-7' />
            </button>
            <button className='flex items-center gap-2 bg-gray-900 rounded-lg px-5 py-3'>
              <img src={GooglePlayLogo} alt='' className='h-6 w-6' />
              <span className='flex flex-col items-start leading-tight text-white'>
                <span className='text-[0.6rem]'>GET IT ON</span>
                <span className='text-sm font-semibold'>Google Play</span>
              </span>
            </button>
          </div>
          {/* discover more */}
          <div className='flex items-center gap-3'>
            <button
              type='button'
              aria-label='Discover more'
              className='flex items-center justify-center w-10 h-10 rounded-full bg-bg-primary shadow-md text-body-text-primary'
            >
              <ChevronDownIcon />
            </button>
            <p className='sm-text'>Discover more</p>
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          <img src={HeroImage} alt='Silicon banking app preview' className='max-h-150' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
