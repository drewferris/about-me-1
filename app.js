var name = prompt ('What\'s your name?');
alert('Hi, ' + name + ' welcome to Rashid 2.0. Please answer the following 5 questions. Please answer with either y/n or yes/no.');

var ques_location = prompt('I moved to Seattle from Oregon.');
ques_location = ques_location.toLowerCase();
if (ques_location === 'yes' || ques_location === 'y'){
  alert('You are incorrect');
}
  else if (ques_location === 'no' || ques_location === 'n'){
    alert('Correct!');
  }
  else {
    alert('You did something weird')
  }
console.log(name + ' answered ' + ques_location + ' for ques_location');

var ques_seattle = prompt('I am currently attending a bootcamp to be a professional billards player.');
ques_seattle = ques_seattle.toLowerCase();
if (ques_seattle === 'yes' || ques_seattle === 'y'){
  alert('You are incorrect!');
}
  else if (ques_seattle === 'no' || ques_seattle === 'n'){
    alert ('Correct!');
  }
  else {
    alert ('You did something weird')
  }
console.log(name + ' answered ' + ques_seattle + ' for ques_seattle');

var ques_interest = prompt('I\'m interested in web data and the reach of the inernet.');
ques_interest = ques_interest.toLowerCase();
if (ques_interest === 'yes' || ques_interest === 'y'){
  alert('You are correct!');

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
}
  else if (ques_education === 'no' || ques_education === 'n'){
    alert ('Incorrect');
  }
  else {
    alert ('You did something weird');
  }
console.log(name + ' answered ' + ques_education + ' for ques_education');

var ques_goal = prompt('My goal is to get a job as a software engineer.')
ques_goal = ques_goal.toLowerCase();
if (ques_goal === 'yes' || ques_goal === 'y'){
  alert('You are correct!');
}
  else if (ques_goal === 'no' || ques_goal === 'n'){
    alert ('Incorrect');
  }
  else {
    alert ('You did something weird')
  }
console.log(name + ' answered ' + ques_goal + ' for ques_goal');
