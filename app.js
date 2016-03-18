 var name = prompt ('What\'s your name?');
 alert('Hi, ' + name + ' welcome to Rashid 2.0. Please answer the following 5 questions. Please answer with either y/n or yes/no.');
 var correctGuess = 0;

 var ques_location = prompt('I moved to Seattle from Oregon.');
 ques_location = ques_location.toLowerCase();
 if (ques_location === 'yes' || ques_location === 'y'){
   alert('You are incorrect');
 }
  else if (ques_location === 'no' || ques_location === 'n'){
    alert('Correct!');
    correctGuess++;
  }
  else {
    alert('You did something weird');
  }
 console.log(name + ' answered ' + ques_location + ' for ques_location');

 var ques_seattle = prompt('I am currently attending a bootcamp to be a professional billards player.');
 ques_seattle = ques_seattle.toLowerCase();
 if (ques_seattle === 'yes' || ques_seattle === 'y'){
   alert('You are incorrect!');
 }
  else if (ques_seattle === 'no' || ques_seattle === 'n'){
    alert ('Correct!');
    correctGuess++;
  }
  else {
    alert ('You did something weird');
  }
 console.log(name + ' answered ' + ques_seattle + ' for ques_seattle');

 var ques_interest = prompt('I\'m interested in web data and the reach of the inernet.');
 ques_interest = ques_interest.toLowerCase();
 if (ques_interest === 'yes' || ques_interest === 'y'){
   alert('You are correct!');
   correctGuess++;
 }
  else if (ques_interest === 'no' || ques_interest === 'n'){
    alert ('Incorrect');
  }
  else {
    alert ('You did something weird');
  }
 console.log(name + ' answered ' + ques_interest + ' for ques_interest.');

 var ques_education = prompt('I studied Business Management.');
 ques_education = ques_education.toLowerCase();
 if (ques_education === 'yes' || ques_education === 'y'){
   alert('You are correct!');
   correctGuess++;
 }
  else if (ques_education === 'no' || ques_education === 'n'){
    alert ('Incorrect');
  }
  else {
    alert ('You did something weird');
  }
 console.log(name + ' answered ' + ques_education + ' for ques_education');

 var ques_goal = prompt('My goal is to get a job as a software engineer.');
 ques_goal = ques_goal.toLowerCase();
 if (ques_goal === 'yes' || ques_goal === 'y'){
   console.log(name + ' answered yes to ques_goal');
   correctGuess++;
   var ques_goal_two = prompt('Correct! For a civic tech company?');
   ques_goal_two = ques_goal_two.toLowerCase();
   if (ques_goal_two === 'yes' || ques_goal_two === 'y'){
     console.log(name + ' correctly guessed ques_goal_two');
     alert('You are correct!');
     correctGuess++;
   } else if (ques_goal_two === 'n' || ques_goal_two === 'no') {
     alert('Incorrect');
     console.log(name + ' incorrectly guessed ques_goal_two');
   } else {
     alert('smh');
   }
 } else if (ques_goal === 'no' || ques_goal === 'n'){
   alert ('Incorrect');
   console.log(name + ' incorrectly guessed ques_goal');
 } else {
   alert ('You did something weird');
   console.log('Something weird happened for ' + name + ' on ques_goal');
 }
 console.log(name + ' answered ' + ques_goal + ' for ques_goal');

 var i = 0;
 while(i < 4){
   var ques_topten = prompt('With regard to the top-ten list, guess the number corresponding to my favorite app.');
   ques_topten = parseInt(ques_topten);
   if(ques_topten === 2){
     console.log(name + ' guessed ques_topten correct');
     alert('Correct!');
     correctGuess++;
     i = 4;
   } else if (ques_topten > 2){
     alert('Too high!');
     i++;
   } else if (ques_topten < 2){
     alert ('Too low!');
     i++;
   } else if (isNaN(ques_topten) === true){
     alert('Please enter a number!');
     console.log(name + ' entered a NaN for ques_topten');
     i++;
   } else {
     alert('Something went wrong here.');
     console.log(name + ' did something weird.');
   }
 };

 console.log(name + ' answered the following questions correct out of 8, ' + correctGuess);
 alert('You answered ' + correctGuess + ' questions correct out of a total of 8!');

 confirm('Enter your Top 5 Favorite Games');
 var arrayGame = [];
 var game5 = prompt('Number 5?');
 console.log(name + ' entered the following for 5th game, ' + game5);
 arrayGame.push(game5);
 var game4 = prompt('Number 4?');
 console.log(name + ' entered the following for 4th game, ' + game4);
 arrayGame.push(game4);
 var game3 = prompt('Number 3?');
 console.log(name + ' entered the following for 3rd game, ' + game3);
 arrayGame.push(game3);
 var game2 = prompt('Number 2?');
 console.log(name + ' entered the following for 2nd game, ' + game2);
 arrayGame.push(game2);
 var game1 = prompt('Favorite game?');
 arrayGame.push(game1);
 console.log(name + ' entered the following for favorite game, ' + game1);
 console.log(name + '\'s top 5 games are: ' + arrayGame);
