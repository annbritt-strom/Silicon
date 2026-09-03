import NotificationBellIcon from '../assets/images/icons/notification-bell-icon.svg'

const NewsletterSection = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center gap-4'>
        <img src={NotificationBellIcon} alt='Notification Bell' />
        <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
      </div>
      <form>
        <input type='email' placeholder='Your email' />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterSection
