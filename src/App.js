import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import SmallTextform from "./components/SmallTextform";
import Alert from "./components/Alert";
import BatteryStatus from "./components/BatteryStatus";
import About from "./components/About";
import Contactus from "./components/Contactus";

// ✅ Updated import: replaced 'Switch' with 'Routes'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alertMessage, setAlertMessage] = useState("Dark");
  const [lightMode, setLightMode] = useState(false);

  const Updatemode = () => {
    if (!lightMode) {
      setAlertMessage("Light");
      document.title = "TextUtils - Light Mode";
    } else {
      setAlertMessage("Dark");
      document.title = "TextUtils - Dark Mode";
    }
    setLightMode(!lightMode);
  };

  const dismissAlert = () => {
    setAlertMessage(null);
  };

  const colourthemes = (value) => {
    const elements = document.getElementsByClassName("mainBody");
    if (elements.length > 0) {
      const element = elements[0];
      if (!lightMode) {
        const darkColors = [
          "#042743",
          "#220428",
          "#121212",
          "#1a0a2b",
          "#280d10",
          "#092b1e",
        ];
        element.style.backgroundColor = darkColors[value - 1];
      } else {
        const lightColors = [
          "#cadbe5",
          "#bda4ea",
          "#cc8fb4",
          "#b06666",
          "#b5bc9f",
          "#8faf91",
        ];
        element.style.backgroundColor = lightColors[value - 1];
      }
    }
  };

  // ✅ Separated the main route content for cleaner JSX inside <Routes>
  const MainContent = () => (
    <>
      <h3 style={{ padding: "10px" }}>- Case Area</h3>
      <Textform
        heading="Text Box"
        buttonheading="Lower & Upper Case"
        button1="Convert UpperCase"
        button2="Convert LowerCase"
        button3="Clear Text"
      />
      <br />
      <hr />
      <hr />
      <h3 style={{ padding: "3px" }}>- Replace Area</h3>
      <SmallTextform
        heading="Text Box"
        buttonheading="Replace Word"
        button="Replace"
        button1="Clear Text"
      />
    </>
  );

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          lightmodebutton={`${lightMode ? "true" : "false"}`}
        />
        {alertMessage && <Alert title={alertMessage} dismiss={dismissAlert} />}

        <div
          className="d-flex justify-content-around text-light"
          style={{ backgroundColor: lightMode ? "#181619" : "#683665" }}
        >
          <div
            className="d-flex justify-content-end"
            style={{ width: "950px" }}
          >
            <BatteryStatus />
            <h2
              className="d-flex justify-content-center align-items-center"
              style={{ marginLeft: "260px", marginRight: "90px",textShadow: "4px 4px 10px black"}}
            >
              TextUtils Website
            </h2>
          </div>

          <div
            className="d-flex justify-content-around align-items-center"
            style={{ width: "500px" }}
          >
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={Updatemode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Lightmode
              </label>
            </div>

            <div>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                {[1, 2, 3, 4, 5, 6].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => colourthemes(val)}
                    style={{
                      border: "2px solid black",
                      borderRadius: "5px",
                      backgroundColor: lightMode
                        ? [
                            "#cadbe5",
                            "#bda4ea",
                            "#cc8fb4",
                            "#b06666",
                            "#b5bc9f",
                            "#8faf91",
                          ][val - 1]
                        : [
                            "#042743",
                            "#220428",
                            "#121212",
                            "#1a0a2b",
                            "#280d10",
                            "#092b1e",
                          ][val - 1],
                      width: "30px",
                      height: "35px",
                    }}
                  ></button>
                ))}
              </div>
              <h6 style={{ marginLeft: "55px", marginTop: "3px" }}>Themes</h6>
            </div>
          </div>
        </div>
        <div
          className={`mainBody ${
            lightMode ? "navbar-light text-dark" : "navbar-dark text-white"
          }`}
          style={{ backgroundColor: lightMode ? "#cadbe5" : "#042743",height: "1500px"}}
        >
          {/* ✅ Updated to use <Routes> and 'element' prop instead of <Switch> and children */}
          <Routes>
            <Route path="/about" element={<About />} />{" "}
            {/* ✅ v6 route format */}
            <Route path="/contactus" element={<Contactus />} />{" "}
            {/* ✅ v6 route format */}
            <Route path="/" element={<MainContent />} />{" "}
            {/* ✅ v6 route format */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
