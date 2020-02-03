import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field';

const renderFields = (state, buttonHandler) => {
  return state.fields.map((value, index) => {
    return <Field title={value.title} description={value.description} number={index+1} key={index} reactKey={index} scaleNum={value.scaleNum} buttonHandler={buttonHandler} fieldValue={value.fieldValue}/>
  })
}

const Form = ({state, buttonHandler}) => {
  return (
    <>
    <div className="pain-scale">
      <h1 className="title">Bedömning</h1>
        <p className="intro">Observera personen och bedöm graden av påverkan med skalan <b>0 till 3</b> i punkt 1 till 6 nedan!</p>
        {renderFields(state, buttonHandler)}

        <Link className="link link-results" to="/results">Se resultat ></Link>
      </div>
    </>
  );
};

export default Form;