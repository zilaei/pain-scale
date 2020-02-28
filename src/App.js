import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      sent: '',
      error: '',
      spinner: false,
      redirect: false,
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

  resultIndicator = (x, y) => {
    const pP = this.state.painPoints;
    return pP >= x && pP <= y ? '' : 'inactive';
  }

  submitHandler = e => {
    e.preventDefault();
    e.persist();

    this.setState({
      spinner: true
    })

    const messageHtml = `
      <ul>
        ${this.state.fields.map((field, i) => {
          return `<li>
              <span>${i+1}. ${field.title}: </span>
              <b>${field.fieldValue}</b>
            </li>`;
        }).join('')}
      </ul>

      <span><b>Total: </b>${this.state.painPoints}</span>

      <br></br>

      <span><b>Smärtnivå: </b></span>
      ${this.resultIndicator(0,2) === 'inactive' ?  '' : '<span>Ingen (0-2)</span>'}
      ${this.resultIndicator(3,7) === 'inactive' ?  '' : '<span>Mild (3-7)</span>'}
      ${this.resultIndicator(8,13) === 'inactive' ?  '' : '<span>Måttlig (8-13)</span>'}
      ${this.resultIndicator(14,18) === 'inactive' ?  '' : '<span>Svår (14-18)</span>'}

      <br></br>
      <br></br>

      <span>Typ av smärta</span>
      <ul>
        <li>
          <b>Långvarig: </b>${this.state.lasting ? 'Ja' : 'Nej'}
        </li>
        <li>
          <b>Akut: </b>${this.state.accute ? 'Ja' : 'Nej'}
        </li>
        <li>
          <b>Blandad: </b>${this.state.mixed ? 'Ja' : 'Nej'}
        </li>
      </ul>

      <span><b>Namn på patient: </b>${this.state.patientName}</span>
      <br></br>
      <span><b>Ditt namn: </b>${this.state.yourName}</span>
    `;

    const templateParams = {
      "to_email": this.state.receiverEmailInput,
      // "to_email": "Tommy.Boije@helsingborg.se",
      "from_name": "Pain Scale App",
      "from_email": "max.frederiksen@ecsolutions.se",
      "reply_to": "max.frederiksen@ecsolutions.se",
      "to_name": this.state.yourName,
      "message_html": messageHtml
    };

    window.emailjs.send('gmail', 'template_BxjtD38x', templateParams)
      .then(() => {
        this.setState({
          sent: 'Bedömning skickad!',
          spinner: false
        }, () => {
          setTimeout(() => {
            window.location = window.origin + process.env.PUBLIC_URL;
          }, 1000)
        })
      })
      .catch(error => this.setState({ error: 'Ett fel inträffade: Vänliged fyll i en giltig e-postadress'}));
  
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
          <Router basename={process.env.PUBLIC_URL}>
            <Route exact path="/" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler}/>} />
            <Route path="/assessment" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler}/>} />
            <Route path="/results" render={(props) => <Results {...props} state={this.state} settingsHandler={this.settingsHandler} changeHandler={this.changeHandler} submitHandler={this.submitHandler} resultIndicator={this.resultIndicator}/>} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
