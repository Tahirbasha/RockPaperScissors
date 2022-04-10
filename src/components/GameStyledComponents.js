import styled from 'styled-components'

export const Maincontainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100vh;
  padding-top: 30px;
`

export const ScoreContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 18px;
  padding-right: 18px;
  width: 60%;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Items = styled.h1`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 30px;
  font-weight: 500;
  width: 50%;
`
export const ResultPageItems = styled.p`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 15px;
  font-weight: 500;
  width: 50%;
`

export const ScoreNumberContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 20%;
  @media (max-width: 576px) {
    width: 50%;
  }
`

export const Number = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 28px;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`
export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 20%;
  height: 40%;
  margin-top: 20px;
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  border: 0px;
`

export const ChoiceImage = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: ${props => (props.RuleImage ? 500 : 120)}px;
  width: ${props => (props.RuleImage ? 500 : 120)}px;
  @media (max-width: 576px) {
    height: ${props => (props.RuleImage ? 250 : 70)}px;
    width: ${props => (props.RuleImage ? 250 : 70)}px;
    margin: 10px;
  }
`
export const ModalBtn = styled.button`
  color: #223a5f;
  font-family: Bree Serif;
  align-self: ${props => (props.modBtn ? 'flex-end' : 'center')};
  height: 35px;
  border-radius: 8px;
  width: ${props => (props.modBtn ? '10%' : null)};
  border: 0px;
  margin: 20px;
`
export const ModalContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-end;
`
export const ResultChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 40%;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width) {
    width: 100%;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;

  text-align: center;
  @media (max-width) {
    width: 50%;
  }

  //   margin: 18px;
`
