function add(a, b) {
  return a + b;
}

const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined || secondArg === undefined) {
  console.log('NaN');
} else {

  const num1 = parseInt(firstArg);
  const num2 = parseInt(secondArg);
  console.log(add(num1, num2));
}


