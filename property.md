https://colorhunt.co/palettes/popular

https://getcssscan.com/css-box-shadow-examples

- how to shuffle each answer

- how to check correct answer

- display scores 

- play again button

- landing page

``` Javascript
  const quizzes = quizData.map(quiz => {
    let answer = quiz.correct_answer
    let incorrectAnswer = quiz.incorrect_answers
    // let optionList = incorrectAnswer
    // let newArray = optionList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0 , answer)
    // console.log(optionList)
    const answerChoices = answer + "," + incorrectAnswer
    let newArray = answerChoices.split(',')

    let newArrayy = []
    for (let i=0; i < newArray.length; i++){
      const randNum = Math.floor(Math.random() * newArray.length)
      newArrayy.push(newArray[randNum])
    }
    console.log(newArrayy)

  
    return (
      <Quiz 
        {...quiz}
        // question = {quiz.question}
        // correctAnswer = {quiz.correct_answer}
        // incorrectAnswer = {quiz.incorrect_answers}
        answers= {newArrayy}
      />
    )
    })

```