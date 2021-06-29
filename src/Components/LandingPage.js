import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="countries">
        <button className="country">
          <a href="/berlin">Berlin</a>
        </button>
        <button className="country">Budapest</button>
      </div>
      <div className="countries">
        <button className="country">Paris</button>
        <button className="country">Madrid</button>
      </div>
    </>
  );
}

export default LandingPage;
