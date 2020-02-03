import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
    <div className="landing">
      <h3>Abbey pain scale</h3>
      <br></br>
      <p>
        Ett verktyg för bedömning av smärta hos personer med demenssjukdom, som har svårt att beskriva sin smärta i tal.
        <br></br><br></br>
        Observera personen och bedöm graden av påverkan med skalan <b>0 till 3</b> i punkt <b>1 till 6</b>.
      </p>

      <Link className="link" to="/pain-scale">Börja</Link>

      <img src="./logo.svg" alt="Helsingborgs Stadsvapen" className="logo"></img>
    </div>
    </>
  );
};

export default Landing;