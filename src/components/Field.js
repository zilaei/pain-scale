import React from 'react';

const activeClass = (dataValue, fieldValue) => {
  return dataValue === fieldValue ? 'active': '';
}

const renderScale = (scaleNum, buttonHandler, reactKey, fieldValue) => {
    switch(scaleNum) {
      case 1:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a href="# " className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0">Inte alls</a>
            <a href="# " className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1">Sällan</a>
            <a href="# " className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2">Ibland</a>
            <a href="# " className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3">Ofta</a>
          </div>
        );
      case 2:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a href="# " className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0">Inte alls</a>
            <a href="# " className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1">Lite</a>
            <a href="# " className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2">Måttligt</a>
            <a href="# " className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3">Mycket</a>
          </div>
        );

      default:
        return (<></>);
    }
}

const Field = ({ title, description, number, scaleNum, buttonHandler, reactKey, fieldValue }) => {
  let fieldDisabled = '';
  if (reactKey !== 0) fieldDisabled = fieldValue === null ? 'disabled-field' : '';

  return (
      <div className={`field ${fieldDisabled}`}>
        <div className="field-content">
          <div>
            <b className="field-number">{number}. </b>
          </div>
          <div>
            <h4 className="field-title">{title}</h4>
            <p className="field-description">{description}</p>
            <i className="word-break"></i>
            {renderScale(scaleNum, buttonHandler, reactKey, fieldValue)}
          </div>
        </div>
      </div>
  );
}

export default Field;
