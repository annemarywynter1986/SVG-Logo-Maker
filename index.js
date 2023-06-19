const fs = require('fs');
const prompt = require('prompt-sync')();
const { Circle, Square, Triangle } = require('./lib/shapes');


// building a class for Logo Creation with a functions
class CreateSVGLogo {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}
// array of command line questions 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'TEXT for logo: Enter up to 3 characters: '
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'TEXT COLOR for logo: Enter a color key-word OR hexadecimal number: '
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'SHAPE COLOR of the logo:  Enter a color key-word OR hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shape-type',
        message: 'Choose which Shape type for your logo you would like?',
        choices: ["Circle", "Square", "Triangle"]
    }
]

// function to write data to file
function writeToFile(fileName, data){
        console.log("Writing [" + data + "] to file [" + fileName + "]")
        filesystem.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Congratulations, you have Generated a logo.svg!");
        });
}

async function init(){
    console.log('Starting init');
    var svgString = "";
	var svg_file = "logo.svg";

    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

	//user text
	var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		// 1-3 chars, valid entry
		user_text = answers.text;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
        return;
	}
	console.log("User text: [" + user_text + "]");
	//user font color
	user_font_color = answers["text-color"];
	console.log("User font color: [" + user_font_color + "]");
	//user shape color
	user_shape_color = answers.shape;
	console.log("User shape color: [" + user_shape_color + "]");
	//user shape type
	user_shape_type = answers["pixel-image"];
	console.log("User entered shape = [" + user_shape_type + "]");
	
	//user shape
	let user_shape;
	if (user_shape_type === "Square" || user_shape_type === "square") {
		user_shape = new Square();
		console.log("User selected Square shape");
	}
	else if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color);

	// Create a new Svg instance and add the shape and text elements to it
	var svg = new Svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	
	//Print shape to log
	console.log("Displaying shape:\n\n" + svgString);
	//document.getElementById("svg_image").innerHTML = svgString;

	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile(svg_file, svgString); 
}
init()
