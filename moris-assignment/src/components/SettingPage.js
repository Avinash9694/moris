import React, { useState, useEffect } from "react";
import "./SettingPage.scss";

const SettingPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);
      setBackgroundColor(parsedSettings.backgroundColor);
      setPrimaryColor(parsedSettings.primaryColor);
      setSecondaryColor(parsedSettings.secondaryColor);
      setFontSize(parsedSettings.fontSize);
      setFontColor(parsedSettings.fontColor);
    }
  }, []);

  useEffect(() => {
    const settings = {
      backgroundColor,
      primaryColor,
      secondaryColor,
      fontSize,
      fontColor,
    };
    localStorage.setItem("settings", JSON.stringify(settings));
    applyStyles();
  }, [backgroundColor, primaryColor, secondaryColor, fontSize, fontColor]);

  const applyStyles = () => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = fontColor;
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
      "--secondary-color",
      secondaryColor
    );
    document.documentElement.style.setProperty("--font-size", fontSize);
  };

  return (
    <div className="page settings-page">
      <h1>Settings Page</h1>
      <div className="settings-form">
        <label>
          Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <label>
          Primary Color:
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </label>
        <label>
          Secondary Color:
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </label>
        <label>
          Font Size:
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="">Select Font Size</option>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
          </select>
        </label>
        <label>
          Font Color:
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default SettingPage;
