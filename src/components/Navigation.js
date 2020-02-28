import React from 'react';

const Navigation = ({ state, title, settingsHandler, changeHandler }) => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="title">{title}</h1>
        <a href="# " onClick={settingsHandler} className="settings-link"><i className="settings-icon"></i></a>
      </div>
      <div className={`popup ${state.hidePopup ? 'hidden' : ''}`}>
        <div className="popup-module">
          <div className="popup-content">
            <div className="popup-top-bar">
              <h3 className="sub-title">Bedömning skickas till...</h3>
              <a href="# " onClick={settingsHandler} className="close-link"><i className="close-icon"></i></a>
            </div>

            <input className="input-text input-popup" type="email" name="receiverEmailInput" value={state.receiverEmailInput} onChange={changeHandler} placeholder="E-post..."></input>
            {/* <input className="input-text input-popup" type="tel" name="receiverTelInput" value={state.receiverTelInput} onChange={changeHandler} placeholder="Sms till..."></input> */}
            <a href="# " onClick={settingsHandler} className="link popup-link">Spara</a>
          </div>

            <div className="popup-section">
              <p className="text-gray">
                Det här verktyget är en digital variant av smärtskattningsskalan <a href="http://media.palliativ.se/2015/08/AbbeyPalliativ2011Sve1.pdf" target="_blank" rel="noopener no referrer">Abbey Pain Scale</a>, en smärtskattningsskala för användning vid vård av personer med nedsatta funktioner eller som inte kan verbalisera sin smärta.
                <br></br>
                <br></br>
                <span className="text-medium">Du kan läsa mer om skattning av smärta på </span>
                <a href="https://www.vardhandboken.se/vard-och-behandling/akut-bedomning-och-skattning/smartskattning-av-akut-och-postoperativ-smarta/smartskattningsinstrument/" target="_blank" rel="noopener noreferrer">vardhandboken.se</a>
              </p>
            </div>

            <div className="popup-section">
              <h3 className="copyright">Appen är utvecklad av Max på Hbg Works.</h3>
              <p className="text-gray">Har du också en idé till en lösning som skulle förenkla livet i din verksamhet?</p>
              <a href="mailto:hbgworks@helsingborg.se" target="_blank" rel="noopener noreferrer" className="link cta-button">Hör av dig! &#10084;&#65039;</a>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
