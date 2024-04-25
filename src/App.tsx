import './App.css'

import { QuestionContainer } from './components/questionContainer/QuestionContainer'
import { ScoreBoard } from './components/scoreBoard/ScoreBoard'
import { Questions } from './database/db'

function App() {

  let question = Questions[2];
  return (
    <div>
      <QuestionContainer 
        id={question.id}
        author={question.author}
        text={question.text} 
        answers={question.answers} />
      <ScoreBoard/>
    </div>
  )
}

export default App
