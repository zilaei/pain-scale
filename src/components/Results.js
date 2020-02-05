import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Results = ({state}) => {
    const [resultState, setState] = React.useState({
      longLasting: false,
      accute: false,
      mixed: false,
      patientName: '',
      yourName: '',
      sent: '',
      spinner: false
    })

    const resultIndicator = (x, y) => {
      const pP = state.painPoints;
      return pP >= x && pP <= y ? '' : 'inactive';
    }
    
    const handleChange = (e) => {
      e.persist();
      const value = e.target.value;
      const name = e.target.name;
      const type = e.target.type;
      const checked = e.target.checked;

      if (type == 'checkbox') {
        setState({
          ...resultState,
          [name]: checked
        });
      } else {
        setState({
          ...resultState,
          [name]: value
        });
      }
    }

    const handleSubmit = e => {
      e.preventDefault();
      e.persist();

      setState({
        spinner: true
      })

      const messageHtml = `
        <ul>
          ${state.fields.map((field, i) => {
            return `<li>
                <span>${i+1}. ${field.title}: </span>
                <b>${field.fieldValue}</b>
              </li>`;
          }).join('')}
        </ul>

        <span><b>Total: </b>${state.painPoints}</span>

        <br></br>

        <span><b>Smärtnivå: </b></span>
        ${resultIndicator(0,2) == 'inactive' ?  '' : '<span>Ingen (0-2)</span>'}
        ${resultIndicator(3,7) == 'inactive' ?  '' : '<span>Mild (3-7)</span>'}
        ${resultIndicator(8,13) == 'inactive' ?  '' : '<span>Måttlig (8-13)</span>'}
        ${resultIndicator(14,18) == 'inactive' ?  '' : '<span>Svår (14-18)</span>'}

        <br></br>
        <br></br>

        <span>Typ av smärta</span>
        <ul>
          <li>
            <b>Långvarig: </b>${resultState.lasting ? 'Ja' : 'Nej'}
          </li>
          <li>
            <b>Akut: </b>${resultState.accute ? 'Ja' : 'Nej'}
          </li>
          <li>
            <b>Blandad: </b>${resultState.mixed ? 'Ja' : 'Nej'}
          </li>
        </ul>

        <span><b>Namn på patient: </b>${resultState.patientName}</span>
        <br></br>
        <span><b>Ditt namn: </b>${resultState.yourName}</span>
      `;

      const templateParams = {
        // "to_email": "max.frederiksen@ecsolutions.se",
        "to_email": "Tommy.Boije@helsingborg.se",
        "from_name": "Pain Scale App",
        "from_email": "max.frederiksen@ecsolutions.se",
        "reply_to": "max.frederiksen@ecsolutions.se",
        "to_name": resultState.yourName,
        "message_html": messageHtml
      };

      window.emailjs.send('gmail', 'template_BxjtD38x', templateParams)
        .then(response => {
          setState({
            sent: 'Bedömning skickad!',
            spinner: false
          })
        })
        .catch(error => console.log(error));
    
    }
    
    return (
      <>
        <div className="result">
          <h3>Resultat</h3>
          <i className="word-break"></i>
          <p>Dina observation tyder på att personens antagna smärtnivå är:</p>
          <div className="result-content">
            <div className="result-scale">
              <span className={`none ${resultIndicator(0, 2)}`}>Ingen (0-2)</span>
              <span className={`mild ${resultIndicator(3, 7)}`}>Mild (3-7)</span>
              <span className={`moderate ${resultIndicator(8, 13)}`}>Måttlig (8-13)</span>
              <span className={`accute ${resultIndicator(14, 18)}`}>Svår (14+)</span>
              
              <input className="result-input" type="text" name="result-input" maxLength="2" value={state.painPoints} readOnly></input>
            </div>
            

            <form className="result-form" onSubmit={handleSubmit}>
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
                  <input className="input-checkbox" type="checkbox" name="lasting" checked={resultState.lasting} onChange={handleChange}></input>
                  <input className="input-checkbox" type="checkbox" name="accute" checked={resultState.accute} onChange={handleChange}></input>
                  <input className="input-checkbox" type="checkbox" name="mixed" checked={resultState.mixed} onChange={handleChange}></input>
                </div>
              </div>

              <label htmlFor="patient-name">Namn på patient</label>
              <input className="input-text" type="text" name="patientName" value={resultState.patientName} onChange={handleChange}></input>

              <label htmlFor="your-name">Ditt namn</label>
              <input className="input-text" type="text" name="yourName" value={resultState.yourName} onChange={handleChange}></input>
              <div>
                <Link to="pain-scale" className="previous">&lt; Föregående</Link>
                <button type="submit" className="link">Skicka</button>
                <span>
                  <div class={`spinner ${resultState.spinner ? '' : 'hidden'}`}>
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </span>
              </div>
              <span class="sent">{resultState.sent}</span>
            </form>

          </div>
        </div>
      </>
    );
};

export default Results;