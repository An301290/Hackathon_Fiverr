import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="countries">
        <button className="country-berlin" href="/berlin">
          Berlin
        </button>
        <button className="country-budapest">Budapest</button>
        <button className="country-paris">Paris</button>
        <button className="country-lisbon">Lisbon</button>
      </div>
    </>
  );
}

export default LandingPage;
