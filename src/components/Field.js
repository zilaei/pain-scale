import React from 'react';

const activeClass = (dataValue, fieldValue) => {
  return dataValue === Number(fieldValue) ? 'active': '';
}

const renderScale = (scaleNum, buttonHandler, reactKey, fieldValue) => {
    switch(scaleNum) {
      case 1:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a href="# " className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0">Inte alls=0</a>
            <a href="# " className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1">Sällan=1</a>
            <a href="# " className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2">Ibland=2</a>
            <a href="# " className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3">Ofta=3</a>
          </div>
        );
      case 2:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a href="# " className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0">Inte alls=0</a>
            <a href="# " className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1">Lite=1</a>
            <a href="# " className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2">Måttligt=2</a>
            <a href="# " className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3">Mycket=3</a>
          </div>
        );

      default:
        return (<></>);
    }
}

const Field = ({ title, description, number, scaleNum, buttonHandler, reactKey, fieldValue }) => {
  return (
      <div className="field">
        <div className="field-content">
          <h4 className="field-title">{number}. {title}</h4>
          <p className="field-description">{description}</p>
          <i className="word-break"></i>
          {renderScale(scaleNum, buttonHandler, reactKey, fieldValue)}
        </div>
      </div>
  );
}

export default Field;
