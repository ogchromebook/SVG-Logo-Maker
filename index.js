const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) =>
      input.length <= 3 || "Text must be up to three characters.",
  },

  {
    type: "input",
    name: "textColor",
    message: "Enter text color (Keyword or Hexadecimal):",
  },

  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },

  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color (Keyword or Hexadecimal):",
  },
];

async function generateLogo() {
  try {
    const answers = await inquirer.prompt(questions);
    const { text, textColor, shape, shapeColor } = answers;
    let shapeElement;

  switch (shape) {
    case "circle":
      shapeElement = new Circle(shapeColor, text, textColor);
      break;
    case "triangle":
      shapeElement = new Triangle(shapeColor, text, textColor);
      break;
    case "square":
      shapeElement = new Square(shapeColor, text, textColor);
      break;
  }

  const svgContent = `
  <svg width="300" height="200" xmlns="https://www.w3schools.com/html/html5_svg.asp">
    ${shapeElement.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();
