type Operation = 'multiply' | 'add' | 'divide'

type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "multiply":
      return a * b
    case "add":
      return a + b
    case "divide":
      if (b === 0) {
        throw new Error('0 では割れません')
      }
      return a / b
    default:
      throw new Error('演算子は multiply, add, divide のどれかです')
  }
}

try {
  console.log(calculator(1, 4, 'add'))
} catch (e) {
  console.error('エラーが発生しました。メッセージ: ', e.message)
}

const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
}

multiplicator(2, 4, '2 と 4 の乗算結果:');
multiplicator('string 型では？', 4, 'string と 4 の乗算結果:');
