// var name = prompt ('What\'s your name?');
// alert('Hi, ' + name + ' welcome to Rashid 2.0. Please answer the following 5 questions. Please answer with either y/n or yes/no.');
// var correctGuess = 0
//
// var ques_location = prompt('I moved to Seattle from Oregon.');
// ques_location = ques_location.toLowerCase();
// if (ques_location === 'yes' || ques_location === 'y'){
//   alert('You are incorrect');
// }
//   else if (ques_location === 'no' || ques_location === 'n'){
//     alert('Correct!');
//     correctGuess++
//   }
//   else {
//     alert('You did something weird')
//   }
// console.log(name + ' answered ' + ques_location + ' for ques_location');
//
// var ques_seattle = prompt('I am currently attending a bootcamp to be a professional billards player.');
// ques_seattle = ques_seattle.toLowerCase();
// if (ques_seattle === 'yes' || ques_seattle === 'y'){
//   alert('You are incorrect!');
// }
//   else if (ques_seattle === 'no' || ques_seattle === 'n'){
//     alert ('Correct!');
//     correctGuess++
//   }
//   else {
//     alert ('You did something weird')
//   }
// console.log(name + ' answered ' + ques_seattle + ' for ques_seattle');
//
// var ques_interest = prompt('I\'m interested in web data and the reach of the inernet.');
// ques_interest = ques_interest.toLowerCase();
// if (ques_interest === 'yes' || ques_interest === 'y'){
//   alert('You are correct!');
//   correctGuess++
// }
//   else if (ques_interest === 'no' || ques_interest === 'n'){
//     alert ('Incorrect');
//   }
//   else {
//     alert ('You did something weird');
//   }
// console.log(name + ' answered ' + ques_interest + ' for ques_interest.');
//
// var ques_education = prompt('I studied Business Management.');
// ques_education = ques_education.toLowerCase();
// if (ques_education === 'yes' || ques_education === 'y'){
//   alert('You are correct!');
//   correctGuess++
// }
//   else if (ques_education === 'no' || ques_education === 'n'){
//     alert ('Incorrect');
//   }
//   else {
//     alert ('You did something weird');
//   }
// console.log(name + ' answered ' + ques_education + ' for ques_education');
//
// var ques_goal = prompt('My goal is to get a job as a software engineer.')
// ques_goal = ques_goal.toLowerCase();
// if (ques_goal === 'yes' || ques_goal === 'y'){
//   console.log(name + 'answered yes to ques_goal');
//   correctGuess++
//   var ques_goal_two = prompt('Correct! For a civic tech company?');
//   ques_goal_two = ques_goal_two.toLowerCase();
//   if (ques_goal_two === 'yes' || ques_goal_two === 'y'){
//     alert('You are correct!')
//     correctGuess++
//   } else if (ques_goal_two === 'n' || ques_goal_two === 'no') {
//     alert('Incorrect');
//   } else {
//     alert('smh')
//   }
// } else if (ques_goal === 'no' || ques_goal === 'n'){
//   alert ('Incorrect');
// } else {
//   alert ('You did something weird')
// }
// console.log(name + ' answered ' + ques_goal + ' for ques_goal');
//
// var i = 0;
// while(i < 4){
//   var ques_topten = prompt('With regard to the top-ten list, guess the number corresponding to my favorite app. You have four tries!')
//   ques_topten = parseInt(ques_topten);
//   if(ques_topten === 2){
//     alert('Correct!');
//     correctGuess++
//     i = 4;
//   } else if (ques_topten > 2){
//     alert('Too high!')
//     i++
//   } else if (ques_topten < 2){
//     alert ('Too low!')
//     i++
//   } else if (isNaN(ques_topten) === true){
//     alert('Please enter a number!')
//     i++;
//   }
// };

//alert('You answered ' + correctGuess + ' questions correct out of 8!');
var userFavoriteGames = prompt('What are your top 5 favorite games?');
alert('Your top 5 are: ' + userFavoriteGames);
