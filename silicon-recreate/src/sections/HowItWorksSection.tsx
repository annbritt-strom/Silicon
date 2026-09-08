import MyBudget from '../assets/images/app-preview/my-budget.svg'
import YourCards from '../assets/images/app-preview/your-cards.svg'
import Transfer from '../assets/images/app-preview/transfer.svg'
import TransferPayment from '../assets/images/app-preview/transfer-payment.svg'
import RecievePayment from '../assets/images/app-preview/recieve-payment.svg'
import CreditCardIcon from '../assets/images/icons/credit-card-icon.svg'
import WalletIcon from '../assets/images/icons/wallet-icon.svg'

const HowItWorksSection = () => {
  return (
    <>
      <section className='bg-bg-secondary'>
        <div className='container'>
          <h2 className='flex w-full justify-center pb-11'>How Does It Work?</h2>
          <div className='flex items-center justify-between'>
            <img src={MyBudget} alt='' />
            <img src={YourCards} alt='' />
            <img src={Transfer} alt='' />
          </div>
          <div className='flex flex-col w-full items-center pt-9'>
            <h4>Latest transaction history</h4>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
          </div>
        </div>
      </section>

      <section className='container bg-bg-primary'>
        <div className='flex'>
          <div>
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ul>
            <button className='btn-md'>Learn More</button>
          </div>
          <img src={TransferPayment} alt="" />
        </div>

        <div className='flex'>
          <img src={RecievePayment} alt='' />
          <div>
            <h2>Receive payment from international bank details</h2>
            <div className='flex gap-4'>
              <div>
                <img src= {CreditCardIcon} alt="" />
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
              <div>
                <img src={WalletIcon} alt="" />
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
            <button className='btn-md'>Learn more</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorksSection
