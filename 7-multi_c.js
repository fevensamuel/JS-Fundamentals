const x = process.argv[2];

if (isNaN(x) || x <= 0 || !Number.isInteger(Number(x))) {
  console.log("Missing number of occurrences");
} else {
  const num = parseInt(x);

  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
