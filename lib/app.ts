type Operation = 'multiply' | 'add' | 'divide'

const calculator = (a: number, b: number, op: Operation) => {
  if (op === 'multiply') {
    return a * b
  } else if (op === 'add') {
    return a + b
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0!'
    return a / b
  }
}

calculator(1, 4, 'add')

const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
}

multiplicator(2, 4, '2 と 4 の乗算結果:');
multiplicator('string 型では？', 4, 'string と 4 の乗算結果:');
