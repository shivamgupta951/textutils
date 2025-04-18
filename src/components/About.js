import React from "react";
import bannerImage from "../images/about-banner.png";
export default function About() {
  return (
    <>
      <div
        className="container d-flex justify-content-between"
        style={{ height: "1200px" }}
      >
        <div className="" style={{width: "800px"}}>
          <h2
            className="mx-5 d-flex align-items-end"
            style={{
              height: "160px",
              padding: "20px",
              textShadow: "4px 4px 20px black",
            }}
          >
            About TextUtils
          </h2>
          <div
            className="accordion"
            id="accordionPanelsStayOpenExample"
            style={{ width: "800px" }}
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <strong>Description</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <div className="project-description text-start">
                    <p>
                      <strong>TextUtils</strong> is a powerful, lightweight, and
                      user-friendly text utility tool built with{" "}
                      <span className="text-primary">React</span>. It helps
                      users quickly perform a variety of text manipulation tasks
                      directly in their browser — no installation required.
                    </p>
                    <p>
                      🧭 The app also includes a responsive navigation bar with{" "}
                      <span className="text-success">React Router</span>{" "}
                      integration to navigate between <strong>Home</strong>,{" "}
                      <strong>About</strong>, and <strong>Contact</strong> pages
                      — all without reloading the page.
                    </p>

                    <p>
                      Whether you're a <span className="text-info">writer</span>
                      , <span className="text-info">editor</span>,{" "}
                      <span className="text-info">student</span>, or{" "}
                      <span className="text-info">developer</span> —{" "}
                      <strong>TextUtils</strong> makes handling text effortless
                      and efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <strong>Functions of website</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <p>
                    🚀 With <strong>TextUtils</strong>, you can:
                  </p>
                  <ul>
                    <li>
                      🔠 <strong>Convert text</strong> to{" "}
                      <span className="text-uppercase">uppercase</span> or{" "}
                      <span className="text-lowercase">lowercase</span>
                    </li>
                    <li>
                      ✂️ <strong>Remove extra spaces</strong> from messy or
                      copied content
                    </li>
                    <li>
                      🔁 <strong>Replace specific words or phrases</strong> in
                      your text easily
                    </li>
                    <li>
                      📊{" "}
                      <strong>Get real-time word and character counts</strong>{" "}
                      as you type
                    </li>
                    <li>
                      ⏱️ <strong>Measure estimated reading time</strong> for
                      your content
                    </li>
                    <li>
                      🌗 <strong>Switch between Dark & Light mode</strong>, with
                      multiple color theme options
                    </li>
                    <li>
                      🔋 <strong>Monitor battery status</strong> right from the
                      interface using system data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <strong>Further Updates</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      New Version Updates:
                    </span>
                  </p>
                  <ul>
                    <li>
                      <strong>PDF Export:</strong> Convert and export the edited
                      text to PDF
                    </li>
                    <li>
                      <strong>Spell Checker:</strong> Real-time spell checking
                      and suggestions
                    </li>
                    <li>
                      <strong>Word Frequency Analyzer:</strong> Find most used
                      words
                    </li>
                    <li>
                      <strong>Voice-to-Text:</strong> Type using your voice
                      input
                    </li>
                    <li>
                      <strong>Language Translator:</strong> Translate text into
                      different languages
                    </li>
                    <li>
                      <strong>Save Sessions:</strong> Option to save previous
                      edits locally
                    </li>
                  </ul>
                  <p>
                    <span>
                      Our mission is to keep this tool lightweight,
                      user-friendly, and packed with features that improve your
                      workflow. Keep an eye out for updates as we continue
                      building!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center" style={{height: "600px"}}>
          <img
            src={bannerImage}
            alt="About TextUtils Banner"
            className="img-fluid my-4 card-hover"
            style={{
              maxWidth: "370px",
              borderRadius: "12px",
              boxShadow: "3px 3px 20px 2px black",            
            }}
          />
        </div>
      </div>
      <style>
        {`
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(0.90);
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </>
  );
}
