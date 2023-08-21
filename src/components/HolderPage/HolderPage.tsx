import './HolderPage.scss'

const HolderPage = () => {
  return (
    <div className='holder-page'>
      <div className='holder-page-content'>
        <div className='holder-page-brand'>
          <img src='/assets/images/Logos/banana-new-logo.png' alt='banana-logo' className='holder-page-brand-logo' />
          <h1 className='holder-page-brand-1'>Banana</h1>
          <h1 className='holder-page-brand-2'>HQ</h1>
        </div>
        <div className='holder-page-header'>
          <h1 className='holder-page-header-txt'>Simplifying web3 with AI-driven, intent-based smart accounts</h1>
          <button className='holder-page-header-btn' onClick={() => window.open('https://docs.bananahq.io/', '__blank')} >Learn More</button>
        </div>
      </div>
      <div className='holder-page-footer'>
        <div className='holder-page-footer-social'>
          <a href='https://twitter.com/BananaHQio' target='_blank' rel='noreferrer'>
            <img src='/assets/images/Logos/twitter-white.png' alt='X' className='holder-page-footer-x-icon' />
          </a>
          <a href='https://discord.gg/3fJajWBT3N' target='_blank' rel='noreferrer'>
            <img src='/assets/images/Logos/discord-white.png' alt='discord' className='holder-page-footer-discord-icon' />
          </a>
          <a href='https://discord.gg/3fJajWBT3N' target='_blank' rel='noreferrer'>
            <img src='/assets/images/Logos/telegram-white.png' alt='discord' className='holder-page-footer-telegram-icon' />
          </a>
        </div>
        <p className='holder-page-footer-copyright'>
          © 2023 Rize Labs, HQ Singapore
        </p>
      </div>
    </div>
  )
}

export default HolderPage