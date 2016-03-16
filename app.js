var name = prompt ('What\'s your name?');
alert('Hi, ' + name + ' welcome to Rashid 2.0. Please answer the following 5 questions. Please answer with either y/n or yes/no.');

var ques_location = prompt('I moved to Seattle from Oregon.'.toLowerCase());
if (ques_location == 'yes' || 'y'){
  alert('You are correct!');
}
  else if (ques_location == 'no' || 'n'){
    alert ('Incorrect!');
  }
  else {
    alert ('You did something weird')
  }
console.log(name + ' answered ' + ques_location + ' for ques_location');
