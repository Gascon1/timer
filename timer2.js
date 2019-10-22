const input = process.stdin;
// don't worry about these next two lines of setup work.
input.setRawMode(true);
input.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////


// on any input from stdin (standard input), output a "." to stdout
input.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    setTimeout(() => {process.stdout.write('\x07')}, (key * 1000));
  }
});

