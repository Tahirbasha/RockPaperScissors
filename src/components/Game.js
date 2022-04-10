import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  Maincontainer,
  ScoreContainer,
  Items,
  ScoreNumberContainer,
  Number,
  ItemContainer,
  ChoiceContainer,
  ChoiceButton,
  ChoiceImage,
  ModalBtn,
  ModalContainer,
  CancelBtn,
  ResultContainer,
  ResultChoiceContainer,
  ResultPageItems,
} from './GameStyledComponents'

class Game extends Component {
  state = {
    score: 0,
    randomImage: '',
    isGameStarted: false,
    userChoice: '',
    gameStatus: '',
  }

  componentDidMount() {
    const {optionsList} = this.props

    const RandomNum = Math.floor(Math.random() * 3)
    // console.log(RandomNum)
    const RandomImg = optionsList[RandomNum]
    this.setState({randomImage: RandomImg})
  }

  startGame = e => {
    this.setState({isGameStarted: true, userChoice: e.target}, this.gameResults)
    console.log(e.target, 'jhgh')
  }

  gameResults = () => {
    const {randomImage, userChoice} = this.state
    const Systemchoice = randomImage.id
    // console.log(userChoice)
    if (userChoice.id === Systemchoice) {
      //   console.log('Draw')
      this.setState({gameStatus: 'IT IS DRAW'})
    } else if (userChoice.id === 'ROCK' && Systemchoice === 'SCISSORS') {
      //   console.log('rock win')
      this.setState(prevState => ({
        gameStatus: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (userChoice.id === 'PAPER' && Systemchoice === 'ROCK') {
      //   console.log('PAPER win')
      this.setState(prevState => ({
        gameStatus: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else if (userChoice.id === 'SCISSORS' && Systemchoice === 'PAPER') {
      //   console.log('PAPER win')
      this.setState(prevState => ({
        gameStatus: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      //   console.log('lost')
      this.setState(prevState => ({
        gameStatus: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  playAgain = e => {
    const {optionsList} = this.props
    console.log(e)
    const RandomNum = Math.floor(Math.random() * 3)
    // console.log(RandomNum)
    const RandomImg = optionsList[RandomNum]
    this.setState({isGameStarted: false, randomImage: RandomImg})
  }

  renderGame = () => {
    const {gameStatus, userChoice, randomImage} = this.state
    // const {optionsList} = this.props
    // const UserImage = optionsList.filter(each => each.id === userChoice.id)
    console.log(userChoice, randomImage)
    return (
      <ResultChoiceContainer>
        <ResultContainer>
          <Items>YOU</Items>
          <ChoiceImage src={userChoice.src} alt="your choice" />
        </ResultContainer>
        <ResultContainer>
          <Items>OPPONENT</Items>
          <ChoiceImage src={randomImage.imageUrl} alt="opponent choice" />
        </ResultContainer>
        <ResultContainer>
          <ResultPageItems>{gameStatus}</ResultPageItems>
          <ModalBtn type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </ModalBtn>
        </ResultContainer>
      </ResultChoiceContainer>
    )
  }

  renderGameoptions = () => {
    const {optionsList} = this.props

    return (
      <ChoiceContainer>
        {optionsList.map(each => {
          const testid = `${each.id.toLowerCase()}Button`
          console.log(testid)
          const ImgId = each.id

          return (
            <ChoiceButton key={each.id} onClick={this.startGame}>
              <ChoiceImage
                src={each.imageUrl}
                data-testid={testid}
                key={testid}
                id={ImgId}
                alt={ImgId}
              />
            </ChoiceButton>
          )
        })}
      </ChoiceContainer>
    )
  }

  render() {
    const {score, isGameStarted} = this.state
    // console.log(userChoice)
    // console.log(gameStatus)
    // console.log(isGameStarted)
    return (
      <Maincontainer>
        <ScoreContainer>
          <ItemContainer>
            <Items>Rock Paper Scissors </Items>
          </ItemContainer>
          <ScoreNumberContainer>
            <Number>Score</Number>
            <Number>{score}</Number>
          </ScoreNumberContainer>
        </ScoreContainer>
        {isGameStarted ? this.renderGame() : this.renderGameoptions()}

        <Popup
          modal
          trigger={
            <ModalBtn type="button" modBtn>
              Rules
            </ModalBtn>
          }
        >
          {close => (
            <ModalContainer>
              <CancelBtn>
                <RiCloseLine onClick={() => close()} />
              </CancelBtn>
              <ChoiceImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                RuleImage
              />
            </ModalContainer>
          )}
        </Popup>
      </Maincontainer>
    )
  }
}

export default Game
