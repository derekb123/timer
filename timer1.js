let input = process.argv.slice(2);

const beepers = (times) => {
  //let secs = 0;
  for (let time of times) {
    timeN = Number(time);
    if (timeN > 0 && typeof timeN === "number"){
      setTimeout(() => {
        console.log('beep');
      }, (timeN * 1000));
    }
  }
}


beepers(input);