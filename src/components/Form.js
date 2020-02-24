import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field';

const renderFields = (state, buttonHandler) => {
  return state.fields.map((value, index) => {
    return <Field title={value.title} description={value.description} number={index+1} key={index} reactKey={index} scaleNum={value.scaleNum} buttonHandler={buttonHandler} fieldValue={value.fieldValue}/>
  })
}

const Form = ({state, buttonHandler, infoHandler}) => {
  return (
    <>
    <div className="pain-scale">
      <div className="top-bar">
        <h1 className="title">Bedömning</h1>
        <a href="# " onClick={infoHandler} className="info-link"><i className={`info-icon ${state.infoIconFilled ? 'info-filled' : ''}`}></i></a>
      </div>
        <div className={`info-box ${state.hideInfoBox ? 'hidden' : ''}`}>
          <p>Det här verktyget bygger på den väletablerade modellen Abbey Pain Scale. Du kan läsa mer om verktyget och dess användning <a href="https://www.vardhandboken.se/vard-och-behandling/akut-bedomning-och-skattning/smartskattning-av-akut-och-postoperativ-smarta/smartskattningsinstrument/" target="_blank" rel="noopener noreferrer"> här</a></p>
        </div>
        <p className="intro">Observera personen och bedöm graden av påverkan med skalan <b>0 till 3</b> i punkt 1 till 6 nedan!</p>
        {renderFields(state, buttonHandler)}

        <Link className="link link-results" to="/results">Se resultat ></Link>
      </div>
    </>
  );
};

export default Form;