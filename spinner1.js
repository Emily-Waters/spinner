const spinner = (spinchars, rotations) => {
  let delay = 100;
  for (let spins = 1; spins <= rotations; spins++) {
    spinchars.forEach((element,index) => {
      setTimeout(() => {
        if (spins <= rotations) {
          process.stdout.write(element);
        }
        if (spins === rotations && (index === spinchars.length - 1)) {
          process.stdout.write(element + '\n');
        }
      }, (delay += 100));
    });
  }
};

const spinChars = ['\r|  ===>  Loading\r\t\t   \t','\r/  ===>  Loading\r\t\t.  \t','\r-  ===>  Loading\r\t\t.. \t','\r\\  ===>  Loading\r\t\t...\t',];

spinner(spinChars, 10);