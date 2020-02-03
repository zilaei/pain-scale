import React from 'react';
import { Link } from 'react-router-dom';

const resultIndicator = (x, y, state) => {
  const pP = state.painPoints;
  return pP >= x && pP <= y ? '' : 'inactive';
}

const Results = ({state}) => {
  return (
    <>
      <div className="result">
        <h3>Resultat</h3>
        <i className="word-break"></i>
        <p>Dina observation tyder på att personens antagna smärtnivå är:</p>
        <div className="result-content">
          <div className="result-scale">
            <span className={`none ${resultIndicator(0, 2, state)}`}>Ingen (0-2)</span>
            <span className={`mild ${resultIndicator(3, 7, state)}`}>Mild (3-7)</span>
            <span className={`moderate ${resultIndicator(8, 13, state)}`}>Måttlig (8-13)</span>
            <span className={`accute ${resultIndicator(14, 18, state)}`}>Svår (14+)</span>
            
            <input className="result-input" type="text" name="result-input" maxLength="2" value={state.painPoints} readOnly></input>
          </div>
          

          <form className="result-form">
            <span><b>Typ av smärta</b></span>
            <br></br>
            <span>Ange typ av smärta nedan</span>
            <br></br>
            <br></br>

            <div className="checkboxes">
              <div>
                <label htmlFor="long-lasting">Långvarig</label>
                <label htmlFor="long-lasting">Akut</label>
                <label htmlFor="long-lasting">Blandad</label>
              </div>
              <div>
              <input className="input-checkbox" type="checkbox" name="long-lasting"></input>
              <input className="input-checkbox" type="checkbox" name="accute"></input>
              <input className="input-checkbox" type="checkbox" name="mixed"></input>
              </div>
            </div>

            <label htmlFor="patient-name">Namn på patient</label>
            <input type="text" name="name" ></input>

            <label htmlFor="your-name">Ditt namn</label>
            <input type="text" name="your-name" ></input>
          </form>

          <Link to="pain-scale" className="previous">&lt; Föregående</Link>
          
          <a href="#" className="link">Skicka</a>
        </div>
      </div>
    </>
  );
};

export default Results;