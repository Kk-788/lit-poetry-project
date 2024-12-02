import React from 'react';
import Page from "../components/page";
import "./quiz.css"

const Quiz = () => {
  return (
    <Page title={"Quiz"}>
      <div id="form-container">
        <a href={"https://docs.google.com/forms/d/1M2uuTcNNNVmqgl3ENfJaeuqI2Z19FUX0yTUaJuSTlLE/"} target="_blank">
        <h2 id={"new-tab-note"}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"></path>
          </svg>
          Or open in a new tab
        </h2>
      </a>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfygU4OMszSCpMfWlAMkUiWvN6RK6QbKzB6JOGgeCGMx4C2wQ/viewform?embedded=true">Loading…
        </iframe>
      </div>
    </Page>
  );
};

export default Quiz;