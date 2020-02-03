import React from 'react';

const activeClass = (dataValue, fieldValue) => {
  return dataValue == fieldValue ? 'active': '';
}

const renderScale = (scaleNum, buttonHandler, reactKey, fieldValue) => {
  console.log(fieldValue);
    switch(scaleNum) {
      case 1:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0" href="#">Inte alls=0</a>
            <a className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1" href="#">Sällan=1</a>
            <a className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2" href="#">Ibland=2</a>
            <a className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3" href="#">Ofta=3</a>
          </div>
        );
      break;
      case 2:
        return (
          <div className="scale-info" data-id={reactKey}>
            <a className={`button ${activeClass(0, fieldValue)}`} onClick={buttonHandler} data-value="0" href="#">Inte alls=0</a>
            <a className={`button ${activeClass(1, fieldValue)}`} onClick={buttonHandler} data-value="1" href="#">Lite=1</a>
            <a className={`button ${activeClass(2, fieldValue)}`} onClick={buttonHandler} data-value="2" href="#">Måttligt=2</a>
            <a className={`button ${activeClass(3, fieldValue)}`} onClick={buttonHandler} data-value="3" href="#">Mycket=3</a>
          </div>
        );
      break;

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
