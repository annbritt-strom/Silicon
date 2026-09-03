import CardIcon from '../assets/images/icons/credit-card-icon.svg'
import DataSecurityIcon from '../assets/images/icons/data-security-icon.svg'
import StatisticsIcon from '../assets/images/icons/statistics-icon.svg'
import SupportIcon from '../assets/images/icons/support-icon.svg'
import CashbackIcon from '../assets/images/icons/cashback-icon.svg'
import HappyFaceIcon from '../assets/images/icons/happy-face-icon.svg'
import AppFeaturesImage from '../assets/images/app-preview/app-features.svg'

const features = [
  {
    id: 1,
    icon: CardIcon,
    title: 'Easy Payments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },  
  {
    id: 2,
    icon: DataSecurityIcon,
    title: 'Data Security',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. ',
  },
  {
    id: 3,
    icon: StatisticsIcon,
    title: 'Cost Statistics',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    id: 4,
    icon: SupportIcon,
    title: 'Support 24/7',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    id: 5,
    icon: CashbackIcon,
    title: 'Regular Cashback',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    id: 6,
    icon: HappyFaceIcon,
    title: 'Top Standards',
    description: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
]

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({icon, title, description}: FeatureCardProps){
  return(
    <div>
      <div>
        <img src={icon} alt={title} />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <div>
      <img src={AppFeaturesImage} alt='Features' />
      <div>
        <h2>App Features</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
      
        {/* Feature list */}
        <div>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
