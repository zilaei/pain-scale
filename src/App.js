import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';

import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  constructor() {
    super();

    this.state = {
      infoIconFilled: false,
      disableShowResults: true,
      hidePopup: true,
      painPoints: 0,
      patientName: '',
      yourName: '',
      receiverEmailInput: '',
      receiverTelInput: '',
      lasting: '',
      accute: '',
      mixed: '',
      fields: [
        {
          title: 'Röstuttryck/ljud',
          description: 'Tex om personen gnyr, jämrar sig eller låter',
          scaleNum: 1,
          fieldValue: null
        },
        {
          title: 'Ansiktsuttryck',
          description: 'Tex spänd, rynkar näsan, grimaserar eller ser rädd ut',
          scaleNum: 1,
          fieldValue: null
        },
        {
          title: 'Förändrat kroppsspråk',
          description: 'Tex rastlös, vaggar, skyddar en kroppsdel eller ihopkrupen',
          scaleNum: 2,
          fieldValue: null
        },
        {
          title: 'Förändrat beteende',
          description: 'Tex ökad förvirring, matvägran, ökad eller minskad kroppsaktivitet',
          scaleNum: 2,
          fieldValue: null
        },
        {
          title: 'Fysiologisk förändring',
          description: 'Tex förändrad kroppstemperatur, puls eller blodtryck, svettningar, rodnad eller blekhet i hyn',
          scaleNum: 2,
          fieldValue: null
        },
        {
          title: 'Kroppsliga förändringar',
          description: 'Tex rivet skinn, tryckskador, kontrakturer eller andra skador',
          scaleNum: 2,
          fieldValue: null
        },
      ]
    };
  }


  buttonHandler = (e) => {
    e.preventDefault();
    e.persist();

    const parent = e.target.parentNode;
    const parentNextSibling = parent.parentNode.parentNode.parentNode.nextSibling;
    const parentId = parent.getAttribute('data-id');
    const children = parent.querySelectorAll('.button');
    const activeChildValue = parent.querySelector('.active') ? parent.querySelector('.active').getAttribute('data-value') : 0;
    const targetValue = e.target.getAttribute('data-value');
    const total = parseInt(targetValue) - parseInt(activeChildValue);
    const fieldsCopy = [...this.state.fields];
    const disabledFields = document.querySelectorAll('.disabled-field');

    parentNextSibling.classList.remove('disabled-field');
    fieldsCopy[parentId].fieldValue = Number(targetValue);

    if (disabledFields.length <= 0) this.setState({ disableShowResults: false });

    if (Array.from(e.target.classList).indexOf('active') === -1) {
      for (let child of children) {
        child.classList.remove('active')
      }

      e.target.classList.add('active');

      this.setState({
        painPoints: this.state.painPoints + total,
        fields: fieldsCopy
      });
    }
  }

  infoHandler = e => {
    e.preventDefault();
    e.persist();

    this.setState((state) => ({
      hideInfoBox: !state.hideInfoBox,
      infoIconFilled: !state.infoIconFilled
    }));
  }

  settingsHandler = e => {
    e.preventDefault();
    e.persist();

    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('noscroll');

    this.setState((state) => ({
      hidePopup: !state.hidePopup,
    }));
  }


  changeHandler = (e) => {
    e.persist();
    const value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;
    const checked = e.target.checked;

    if (type === 'checkbox') {
      this.setState({
        ...this.state,
        [name]: checked
      });
    } else {
      this.setState({
        ...this.state,
        [name]: value
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="page-content">
          <Router history={history}>
            <Route exact path="/" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler}/>} />
            <Route exact path="/pain-scale" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler}/>} />
            <Route exact path="/results" render={(props) => <Results {...props} state={this.state} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler} />} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
