import "./HolderPage.scss";

const HolderPage = () => {
  return (
    <div className="holder-page">
      <img
        src="/assets/images/HolderPage/black-smoky-bg.jpeg"
        style={{ display: "none" }}
      />
      <div className="holder-page-content">
        <div className="holder-page-brand">
          {/* <img
            src="/assets/images/Logos/banana-new-logo.png"
            alt="banana-logo"
            className="holder-page-brand-logo"
          /> */}
          {/* <img
            src="/assets/images/Logos/banana-new-logo.png"
            alt="banana-logo"
            className="holder-page-brand-logo"
          /> */}


          <h1 className="holder-page-brand-1">RizeLabs</h1>
          {/* <h1 className="holder-page-brand-1">Labs</h1> */}
        </div>
        <div className="holder-page-header">
          <h1 className="holder-page-header-txt">
            Building... <br />
            The Next Generation Infrastructure and Apps
          </h1>
          {/* <button
            className="holder-page-header-btn"
            onClick={() =>
              window.open(
                "https://ethresear.ch/t/a-decentralised-solver-architecture-for-executing-intents-on-evm-blockchain/16608?u=rishotics",
                "__blank"
              )
            }
          >
            Learn More
          </button> */}
        </div>
      </div>
      <div className="holder-page-footer">
        <div className="holder-page-footer-social">
          {/* <a
            href="https://twitter.com/RizeLabs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/Logos/twitter-white.png"
              alt="X"
              className="holder-page-footer-x-icon"
            />
          </a> */}
          {/* <a
            href="https://twitter.com/RizeLabs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/Logos/discord-white.png"
              alt="discord"
              className="holder-page-footer-discord-icon"
            />
          </a> */}
          {/* <a
            href="https://t.me/+Tsmq_dWRK0NkMTc1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/Logos/telegram-white.png"
              alt="discord"
              className="holder-page-footer-telegram-icon"
            />
          </a> */}
        </div>
        <p className="holder-page-footer-copyright">
          © 2023 Rize Labs | HQ Singapore | info@rizelabs.io
        </p>
      </div>
    </div>
  );
};

export default HolderPage;
