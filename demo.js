/**
 * Theme Showcase: JavaScript
 * This file contains various syntax structures to test your color palette.
 */

// 1. Imports and Modules
import { useState, useEffect } from "react";
import * as Utils from "./utils.js";

// 2. Variables and Constants
const THEME_NAME = "My Awesome Theme";
const VERSION = 1.0;
let isDarkTheme = true;
var legacyVariable = null;

// 3. Data Structures
const colorPalette = {
  primary: "#ff5722",
  secondary: "#03a9f4",
  background: ["#121212", "#1e1e1e"],
  isActive: true,
  metadata: {
    author: "Dev",
    tags: ["ui", "dark", "vibrant"],
  },
};

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

// 4. Regular Expressions & Strings
const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
const greeting = "Hello, world!";
const templateLiteral = `Welcome to ${THEME_NAME} v${VERSION}`;

// 5. Functions (Arrow, Standard, Generator)
const calculateLuminance = (hexCode) => {
  if (!hexRegex.test(hexCode)) {
    throw new Error("Invalid hex code");
  }
  return 0.5; // Stub return
};

function processColors(palette = {}) {
  for (const [key, value] of Object.entries(palette)) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
}

function* idMaker() {
  let index = 0;
  while (index < 3) {
    yield index++;
  }
}

// 6. Classes and Object-Oriented Programming
class ThemeManager extends Utils.BaseManager {
  #privateField = "secret";

  constructor(name, defaultDark = true) {
    super();
    this.name = name;
    this.isDark = defaultDark;
  }

  get isDarkMode() {
    return this.isDark;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    return this.isDark;
  }

  static getAuthor() {
    return "Theme Developer";
  }
}

// 7. Async/Await, Promises, and Control Flow
async function fetchThemeConfig(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    switch (data.type) {
      case "dark":
        document.body.classList.add("dark-mode");
        break;
      case "light":
        document.body.classList.remove("dark-mode");
        break;
      default:
        console.warn("Unknown theme type");
    }

    return data;
  } catch (error) {
    console.error("Failed to load theme config:", error);
    return null;
  } finally {
    console.debug("Theme fetch attempt completed.");
  }
}

// 8. Event Listeners and Callbacks
document.addEventListener("DOMContentLoaded", (event) => {
  const manager = new ThemeManager(THEME_NAME);

  if (manager.isDarkMode) {
    fetchThemeConfig("https://api.example.com/theme/dark")
      .then((config) => console.log(config))
      .catch((err) => console.error(err));
  }
});
