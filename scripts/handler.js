function calculateHandler(event) {
  // read & process user input from event
    let x = parseInt(document.querySelector('#value1').value);
    let y = parseInt(document.querySelector('#value2').value);
    let op = document.querySelector('#operator').value;

  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!
  
  // render output to DOM for user
  document.querySelector('#result').innerHTML = result;
  // log user action for developers

  // return true for the browser
  return true;
}
