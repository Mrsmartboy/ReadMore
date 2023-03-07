import {useState} from 'react'

import {
  MainContainer,
  HeadingElement,
  ParagraphElement,
  ImageElement,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [read, setRead] = useState(true)

  const onClickButton = () => {
    setRead(prevState => !prevState)
  }
  const text = reactHooksDescription
  const slicedText = text.slice(0, 170)

  const description = read ? slicedText : text
  console.log(description)

  const ButtonText = read ? 'Read More' : 'Read Less'

  return (
    <MainContainer>
      <HeadingElement>React Hooks</HeadingElement>
      <ParagraphElement>Hooks are a new addition to react</ParagraphElement>
      <ImageElement
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{description}</Description>
      <Button onClick={onClickButton}>{ButtonText}</Button>
    </MainContainer>
  )
}

export default ReadMore
