interface MultiplyValues {
  value1: number
  value2: number
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) {
    throw new Error('引数が足りません')
  }
  if (args.length > 4) {
    throw new Error('引数が多すぎます')
  }

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('引数には数字を指定してください')
  }
}

const multiplicator = (a, b, printText) => {
  console.log(printText,  a * b);
}

try {
  const { value1, value2 } = parseArguments(process.argv)
  multiplicator(value1, value2, `${value1} と ${value2} の乗算結果:`);
} catch (e) {
  console.error('エラーが発生しました。メッセージ: ', e.message)
}
