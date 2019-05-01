let clunkCounter = 0;

function display(output) {
  console.log(output);
  clunkCounter += 1;
}

function clunk(times) {
  let num = times;
  while (num > 0) {
    display('철컥');
    num -= 1;
  }
}

function thingamajig(size) {
  let facky = 1;
  clunkCounter = 0;
  if (size === 0) {
    display('찰칵');
  } else if (size === 1) {
    display('쿵');
  } else {
    while (size > 1) {
      facky *= size;
      size -= 1;
    }
    clunk(facky);
  }
}

thingamajig(5);
console.log(clunkCounter);
