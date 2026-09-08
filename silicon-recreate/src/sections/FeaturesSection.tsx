import AppFeaturesImage from '../assets/images/app-preview/app-features.svg'
import { appFeatures } from '../data/features'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({icon, title, description}: FeatureCardProps){
  return(
    <div className='flex flex-col gap-3'>
      <div>
        <img src={icon} alt='' />
      </div>
      <h5>{title}</h5>
      <p className='sm-text'>{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section className='container flex items-center justify-between gap-16 py-20'>
      <img src={AppFeaturesImage} alt='Silicon banking app preview' className='max-h-150 flex-1' />
      <div className='flex-1'>
        <h2>App Features</h2>
        <p className='lg-text max-w-lg pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

        <div className='grid grid-cols-2 gap-x-10 gap-y-9 pt-11'>
          {appFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
