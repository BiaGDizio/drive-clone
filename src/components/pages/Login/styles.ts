import styled from 'styled-components'
import Cow from '@assets/cow.webp'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  column-gap: 2rem;
`
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const ContainerImage = styled.div`
  width: 90rem;
  max-width: 50%;
  height: 100%;
  background-image: url(${Cow.src});
  background-size: cover;
  border-radius: 20px;
`
export const ContainerTitle = styled.div`
  background-color: transparent;
  width: 100%;
`
export const Title = styled.h3`
  background-color: red;
  width: 100px;
`

export const RightContent = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-end;
  border-radius: 10px;
  width: 100%;
  max-width: 50rem;
`

export const Input = styled.input`
  border-radius: 5px;
  border: solid 1px grey;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: grey;
`
export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
