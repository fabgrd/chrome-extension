import React, { useState } from "react";
import { render } from "react-dom";
import "./popup.css";
import logo from "../public/logo.png";

function Popup() {
  const [muted, setMuted] = useState(false);

  function muteTabs() {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.update(tab.id, { muted: true });
      });
      setMuted(true);
    });
  }

  function unmuteTabs() {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.update(tab.id, { muted: false });
      });
      setMuted(false);
    });
  }

  return (
    <div className="popup-container">
      <img className="logo" src={logo} />
      <h1>Chut</h1>
      <p>
        Mute or unmute all tabs in your Chrome browser with one click.
      </p>
      <button className="mute-button" onClick={muteTabs} disabled={muted}>
        SHHHT !
      </button>
      <button className="unmute-button" onClick={unmuteTabs} disabled={!muted}>
        UNSHT !
      </button>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
