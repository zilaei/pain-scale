import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from './components/Banner';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  constructor() {
    super();

    this.state = {
      painPoints: 0,
      fields: [
        {
          title: 'Röstuttryck/ljud',
          description: 'Tex om personen gnyr, jämrar sig eller låter',
          scaleNum: 1,
          fieldValue: 0
        },
        {
          title: 'Ansiktsuttryck',
          description: 'Tex spänd, rynkar näsan, grimaserar eller ser rädd ut',
          scaleNum: 1,
          fieldValue: 0
        },
        {
          title: 'Förändrat kroppsspråk',
          description: 'Tex rastlös, vaggar, skyddar en kroppsdel eller ihopkrupen',
          scaleNum: 2,
          fieldValue: 0
        },
        {
          title: 'Förändrat beteende',
          description: 'Tex ökad förvirring, matvägran, ökad eller minskad kroppsaktivitet',
          scaleNum: 2,
          fieldValue: 0
        },
        {
          title: 'Fysiologisk förändring',
          description: 'Tex förändrad kroppstemperatur, puls eller blodtryck, svettningar, rodnad eller blekhet i hyn',
          scaleNum: 2,
          fieldValue: 0
        },
        {
          title: 'Kroppsliga förändringar',
          description: 'Tex rivet skinn, tryckskador, kontrakturer eller andra skador',
          scaleNum: 2,
          fieldValue: 0
        },
      ]
    };
  }


  buttonHandler = (e) => {
    e.preventDefault();
    e.persist();

    const parent = e.target.parentNode;
    const parentId = parent.getAttribute('data-id');
    const children = parent.querySelectorAll('.button');
    const activeChildValue = parent.querySelector('.active').getAttribute('data-value');
    const targetValue = e.target.getAttribute('data-value');
    const total = parseInt(targetValue) - parseInt(activeChildValue);
    const fieldsCopy = [...this.state.fields];
    fieldsCopy[parentId].fieldValue = targetValue;

    if (Array.from(e.target.classList).indexOf('active') === -1) {
      for (let child of children) {
        child.classList.remove('active')
      }

      e.target.classList.add('active');

      this.setState({
        painPoints: this.state.painPoints + total,
        fields: fieldsCopy
      }, () => console.log(this.state));
    }
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <div className="page-content">
          <Router>
            <Route exact path="/" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler}/>} />
            <Route exact path="/pain-scale" render={(props) => <Form {...props} state={this.state} buttonHandler={this.buttonHandler}/>} />
            <Route exact path="/results" render={(props) => <Results {...props} state={this.state}/>} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
