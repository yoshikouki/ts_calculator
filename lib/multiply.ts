const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `${a} と ${b} の乗算結果:`);
