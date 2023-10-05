import {Component} from 'react'
import './index.css'

import RulesPopup from '../RulesPopup'
import ChoiceItem from '../ChoiceItem'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    optedChoice: '',
    opponentChoice: '',
    isWinOrLoss: false,
    result: '',
  }

  getResult = (optId, oppId) => {
    const isWinning =
      (optId === 'ROCK' && oppId === 'SCISSORS') ||
      (optId === 'SCISSORS' && oppId === 'PAPER') ||
      (optId === 'PAPER' && oppId === 'ROCK')

    if (oppId === optId) {
      return 'IT IS DRAW'
    }
    if (isWinning) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  getAddScore = result => {
    if (result === 'YOU WON') return 1
    if (result === 'YOU LOSE') return -1
    return 0
  }

  onOptingChoice = choiceId => {
    const {choicesList} = this.props
    const oppIndex = Math.floor(Math.random() * 3)
    const optIndex = choicesList.findIndex(ele => ele.id === choiceId)

    const optChoice = choicesList[optIndex].imageUrl
    const oppChoice = choicesList[oppIndex].imageUrl

    const resultVal = this.getResult(choiceId, choicesList[oppIndex].id)

    const addScore = this.getAddScore(resultVal)

    this.setState(prevState => ({
      optedChoice: optChoice,
      isWinOrLoss: true,
      opponentChoice: oppChoice,
      score: prevState.score + addScore,
      result: resultVal,
    }))
  }

  onClickPlayAgain = () => this.setState({isWinOrLoss: false})

  renderChoicesView = choicesList => (
    <div className="choices-container">
      <div className="each-choice-container">
        {choicesList.map(choice => (
          <ChoiceItem
            key={choice.id}
            choice={choice}
            onOptingChoice={this.onOptingChoice}
          />
        ))}
      </div>
    </div>
  )

  renderGameResultView = () => {
    const {optedChoice, opponentChoice, result} = this.state
    return (
      <div className="result-display-container">
        <div className="you-and-opponent-container">
          <div className="each-entity-container">
            <p className="player-name">YOU</p>
            <img alt="your choice" className="entity-img" src={optedChoice} />
          </div>
          <div className="each-entity-container">
            <p className="player-name">OPPONENT</p>
            <img
              alt="opponent choice"
              className="entity-img"
              src={opponentChoice}
            />
          </div>
        </div>
        <div className="play-again-btn-container">
          <p className="result-text">{result}</p>
          <button
            type="button"
            className="play-again-btn"
            onClick={this.onClickPlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {score, isWinOrLoss} = this.state
    const {choicesList} = this.props
    return (
      <div className="game-app-container">
        <div className="score-container">
          <div className="weapons-container">
            <h1 className="weapon-name">Rock Paper Scissors</h1>
          </div>
          <div className="score-display-container">
            <p className="score-name">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {isWinOrLoss
          ? this.renderGameResultView()
          : this.renderChoicesView(choicesList)}

        <RulesPopup />
      </div>
    )
  }
}

export default RockPaperScissors
