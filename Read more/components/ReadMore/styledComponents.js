import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 40px;
`

export const HeadingElement = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
`

export const ParagraphElement = styled.p`
  font-size: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #334155;
`

export const ImageElement = styled.img`
  width: 50%;
`

export const Description = styled.p`
  color: #334155;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  width: 500px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  outline: none;
  padding: 10px;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
