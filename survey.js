const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
let arr = [];
let q = ['What is your nickname? ',
  'What\'s an activity you like doing? ',
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  'What\'s your favourite thing to eat for that meal? ',
  'Which sport is your absolute favourite? ',
  'What is your superpower?'
];
let i = 0;
rl.question(q[i], (answer) => {
  // TODO: Log the answer in a database
  arr.push(answer);
  i++;
  rl.question(q[i], (answer) => {
    arr.push(answer);
    i++;
    rl.question(q[i], (answer) => {
      arr.push(answer);
      i++;
      rl.question(q[i], (answer) => {
        arr.push(answer);
        i++;
        rl.question(q[i], (answer) => {
          arr.push(answer);
          i++;
          rl.question(q[i], (answer) => {
            arr.push(answer);
            i++;
            rl.question(q[i], (answer) => {
              arr.push(answer);
              i++;
              console.log(`\nyour name is ${arr[0]}, you enjoy ${arr[1]} while listening to ${arr[2]}. Your favourite meal of the day is ${arr[3]}, and eat ${arr[4]}. Your favourite sport is ${arr[5]}, and your superpower is ${arr[6]}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});