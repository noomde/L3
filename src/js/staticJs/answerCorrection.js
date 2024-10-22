export class answerCorrection {
  isCorrectAnswer(answer, correctAnswer) {
    if (parseFloat(answer).toFixed(1) === parseFloat(correctAnswer).toFixed(1)) {
      return true
    }
    return false
  }
}