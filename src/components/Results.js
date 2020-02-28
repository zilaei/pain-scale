import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import Navigation from './Navigation'

const Results = ({ state, settingsHandler, changeHandler, submitHandler, resultIndicator }) => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <div className="result">
        <Navigation title={'Resultat'} state={state} settingsHandler={settingsHandler} changeHandler={changeHandler}/>
        <div className="section">
          <div className="inner-content">
              <div className="result-content">
                <div className="result-scale">
                  <h3 className="sub-title">Obeserverad smärtnivå</h3>
                  <p className="sub-description"><b>Dina observation tyder på att personens antagna smärtnivå är:</b></p>
                  <div className="indications">
                    <div>
                      <span className={`none ${resultIndicator(0, 2)}`}>Ingen</span>
                      <span className={`mild ${resultIndicator(3, 7)}`}>Mild</span>
                      <span className={`moderate ${resultIndicator(8, 13)}`}>Måttlig</span>
                      <span className={`accute ${resultIndicator(14, 18)}`}>Svår</span>
                    </div>
                    <div>
                      <span className={`none ${resultIndicator(0, 2)}`}>0-2</span>
                      <span className={`mild ${resultIndicator(3, 7)}`}>3-7</span>
                      <span className={`moderate ${resultIndicator(8, 13)}`}>8-13</span>
                      <span className={`accute ${resultIndicator(14, 18)}`}>14+</span>
                    </div>
                  </div>
                  
                  {/* <input className="result-input" type="text" name="result-input" maxLength="2" value={state.painPoints} readOnly></input> */}
                </div>

                <form className="result-form" onSubmit={submitHandler}>
                  <h3 className="sub-title">Typ av smärta</h3>
                  <br></br>

                  <div className="checkboxes">
                    <div className="checkbox-button">
                      <label>
                        <input className={`${state.lasting ? 'active' : ''}`} type="checkbox" name="lasting" checked={state.lasting} onChange={changeHandler}></input><span>Långvarig</span>
                      </label>
                    </div>
                    <div className="checkbox-button">
                      <label>
                        <input className={`${state.accute ? 'active' : ''}`} type="checkbox" name="accute" checked={state.accute} onChange={changeHandler}></input><span>Akut</span>
                      </label>
                    </div>
                    <div className="checkbox-button">
                      <label>
                        <input className={`${state.mixed ? 'active' : ''}`} type="checkbox" name="mixed" checked={state.mixed} onChange={changeHandler}></input><span>Blandad</span>
                      </label>
                    </div>
                  </div>

                  <label htmlFor="patient-name"><h3 className="sub-title">Patient</h3></label>
                  <input className="input-text" type="text" name="patientName" value={state.patientName} onChange={changeHandler} placeholder="Namn eller rumsnummer"></input>

                  <label htmlFor="your-name"><h3 className="sub-title">Sjuksköterska / Läkare</h3></label>
                  <input className="input-text" type="text" name="yourName" value={state.yourName} onChange={changeHandler} placeholder="Ditt namn"></input>
                  <div>
                    <div className="bottom-buttons">
                      <div>
                        <Link to="/assessment" className="link previous"><i className="arrow-back"></i> Tillbaka till observationen</Link>
                      </div>
                      <div>
                        <button type="submit" disabled={!state.receiverEmailInput ? true : false} className={`link ${!state.receiverEmailInput ? 'disabled-link' : ''}`}>
                          <span class={`tooltiptext ${state.receiverEmailInput ? 'hidden' : ''}`}>Email eller telefon måste fyllas i under inställningar.</span>
                          Skicka bedömmningen
                        </button>
                      </div>
                    </div>
                    <span>
                      <div className={`spinner ${state.spinner ? '' : 'hidden'}`}>
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                      </div>
                    </span>
                  </div>
                  <span className="sent">{state.sent}</span>
                  <span className="error">{state.error}</span>
                </form>
            </div>
          </div>
          <img src="./watermark.svg" alt="Watermark logo" className="watermark"></img>
        </div>
      </div>
    </>
  );
};

export default Results;