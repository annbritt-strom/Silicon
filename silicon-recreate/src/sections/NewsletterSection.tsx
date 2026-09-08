import NotificationBellIcon from '../assets/images/icons/notification-bell-icon.svg'

const NewsletterSection = () => {
  return (
    <section className='container'>
      <div className='flex items-center justify-between gap-6 rounded-2xl bg-bg-secondary px-10 py-8'>
        <div className='flex items-center gap-4'>
          <img src={NotificationBellIcon} alt='Notification Bell' className='w-12' />
          <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>
        <form className='flex items-center gap-3'>
          <div className='flex items-center gap-2 rounded-lg border border-gray-300 bg-bg-primary px-4 py-[0.81rem]'>
            <svg className='text-gray-500' width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M3 5.5C3 4.67157 3.67157 4 4.5 4H19.5C20.3284 4 21 4.67157 21 5.5V18.5C21 19.3284 20.3284 20 19.5 20H4.5C3.67157 20 3 19.3284 3 18.5V5.5Z' stroke='currentColor' strokeWidth='1.5' />
              <path d='M4 6L12 13L20 6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
            <input type='email' placeholder='Your Email' className='sm-text w-48 bg-transparent outline-none placeholder:text-gray-500' />
          </div>
          <button type='submit' className='btn-lg'>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
