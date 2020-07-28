let input = process.argv.slice(2);

const beepers = (times) => {
  //let secs = 0;
  for (let time of times) {
    setTimeout(() => {
      console.log('beep');
    }, (time * 1000));
  }
}


beepers(input);