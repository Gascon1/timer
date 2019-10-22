const beepCommand = () => {
  let userInput = (process.argv.slice(2));
  for (let time of userInput) {
    if (Number(time) >= 0) {
    setTimeout(() => {process.stdout.write('\x07')}, (time * 1000));
    }
  }
}

beepCommand();
