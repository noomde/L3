export class answerCorrection {
  isCorrectAnswer(answer, correctAnswer) {
    if (parseInt(answer) === parseInt(correctAnswer)) { // add correct decimal length
      return true
    }
    return false
  }
}