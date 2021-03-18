const underWeightHighlyLimitBmi = 18.5
const overWeightLowerLimitBmi = 25
const obeseLowerLimitBmi = 30

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

interface CalculateBmiResponse {
  result: string
  healthyWeight: {
    lowerLimit: number
    highlyLimit: number
  },
  height: number
  weight: number
}

const calculateBmi = (height: number, weight: number): CalculateBmiResponse => {
  const meters = height * 0.01
  const bmi = weight / (meters ** 2)

  const healthyLowerLimitWeight = underWeightHighlyLimitBmi * (meters ** 2)
  const healthyHighlyLimitWeight = overWeightLowerLimitBmi * (meters ** 2)

  let result = '標準体型'
  if (bmi < underWeightHighlyLimitBmi) {
    result = '痩せ型'
  } else if (bmi > overWeightLowerLimitBmi) {
    result = 'ぽちゃ型'
  } else if (bmi > obeseLowerLimitBmi) {
    result = '肥満型'
  }
  return {
    result: result,
    healthyWeight: {
      lowerLimit: healthyLowerLimitWeight,
      highlyLimit: healthyHighlyLimitWeight
    },
    height: height,
    weight: weight,
  }
}

try {
  const { value1, value2 } = parseArguments(process.argv)
  console.log(calculateBmi(180,74))
} catch (e) {
  console.error('エラーが発生しました。メッセージ: ', e.message)
}

