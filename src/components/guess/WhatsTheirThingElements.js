import styled from 'styled-components'

 export const WhatsTheirThingContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  top: 20%;
  right: 0;
  bottom: 0;
  left: 0;
  height: 75%;
  width: 80%;
  background-color: pink;
 `

 export const ThingImage = styled.img `
  display: flex;
  margin-top: -150px;
  height: 50%;
 `

 export const ThingOptionsContainer = styled.div `
  background-color: green;
  display: flex;
  height: 30%;
  width: 70%;
 `

 export const ThingOption = styled.button `
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
 `