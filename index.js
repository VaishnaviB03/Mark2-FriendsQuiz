const readlineSync = require("readline-sync");
const chalk = require("chalk");

// console.log(chalk.green("Hello i am vaishnavi"));
// console.log(chalk.blue.bgRed.bold("Trying something new"));
// console.log(chalk.red.underline.bold("Hellooo!!"));
// console.log(chalk.underline.bgBlue("Hii People"));
var red = chalk.red(".")
var blue = chalk.blue(".")
var green = chalk.green(".")
var que = chalk.hex('#F6AA28')
var opt = chalk.hex('#EDCEAB')

console.log(chalk.black.bgWhite.underline("Note : "));
console.log(chalk.black.bgWhite.underline("Write answer in the same way as given in the option"));
console.log("");

var username = readlineSync.question(chalk.underline("Do you know F" + red + "R" + blue + "I" + green + "E" + red + "N" + green + "D" + blue +"S ? "));

console.log("")

var score = 0;
function friendsQuiz(ques,i){
	var temp=[];
	temp[0]=opt(ques.a0)
	temp[1]=opt(ques.a1)
	temp[2]=opt(ques.a2)
	temp[3]=opt(ques.answer)
	console.log(ques.question)
	for(var j=0;j<4;j++){
		console.log(temp[j])
	}
	console.log("")
	var answer = readlineSync.question(chalk.hex("#DAA6F2").underline("Your Answer : "));
  
	if(answer === ques.answer){
		console.log(chalk.hex('#32C351').bold("Correct Answer"));
		score++;
	}
	else{
		console.log(chalk.hex('#C02621').bold("Incorrect Answer !"));
	}
	console.log("You scored " + score);
	console.log("");
	}
	

var loop = [{
	question: que.bold("What’s the name of Joey’s penguin ? "),
	a0:"Snowflake",
	answer:"Huggsy",
	a1:"Waddle",
	a2:"Bobber"
	
},
{
	question: que.bold("What is the name of Ross's pet ? "),
	a0:"Keith",
	a1:"Lancelot",
	answer:"Marcel" ,
	a2:"Alistair"	
},
{
	question: que.bold("What is Chandler’s middle name ? "),
	a0:"Zachary",
	a1:"Jason",
	answer:"Muriel",
	a2:"Kim"	
},
{
	question: que.bold("Who was Chandler’s TV magazine always addressed to ? "),
	answer:"Chanandler Bong	",
	a0:"Chanandler Bang",
	a1:"Chanandler Bing",
	a2:"Chanandler Beng"	 
},
{
	question: que.bold("When Ross and Rachel were“on a break,”Ross slept with Chloe. Where does she work? "),
	a0: "Microsoft",
	answer: "Xerox",
	a1: "Dominos",
	a2: "Bank of America"
	
}
]

if(username === "yes"){
for(var i = 0; i<loop.length; i++){
	var ques = loop[i]
	
	friendsQuiz(ques,i)	
}
}