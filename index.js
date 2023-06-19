const fs = require('fs');
const prompt = require('prompt-sync')();

function createLogo() {
  // Prompt for text input
  const text = prompt('Enter up to three characters: ');

  // Prompt for text color
  const textColor = prompt('Enter text color (keyword or hexadecimal number): ');

  // Prompt for shape selection
  const shapes = ['circle', 'triangle', 'square'];
  console.log('Choose a shape:');
  shapes.forEach((shape, index) => {
    console.log(`${index + 1}. ${shape}`);
  });
  const shapeChoice = parseInt(prompt('Enter the number corresponding to the shape: '), 10);
  const shape = shapes[shapeChoice - 1];

  // Prompt for shape color
  const shapeColor = prompt('Enter shape color (keyword or hexadecimal number): ');

  // Create SVG content
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      <text x="10" y="50" fill="${textColor}">${text}</text>
      ${
        shape === 'circle'
          ? `<circle cx="150" cy="100" r="50" fill="${shapeColor}"/>`
          : shape === 'triangle'
          ? `<polygon points="100,150 200,150 150,50" fill="${shapeColor}"/>`
          : `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}"/>`
      }
    </svg>
  `;

  // Create SVG file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

// Call the createLogo function to start the application
createLogo();
