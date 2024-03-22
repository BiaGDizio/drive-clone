import styled from 'styled-components'

interface ContainerProps {
  $hovered: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 12rem;

  position: relative;

  border-radius: 10px;

  background-color: white;
  border: 1px solid gray;

  border-color: ${({ $hovered }) => ($hovered ? 'green' : 'gray')};
`

export const Content = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  padding: 1.5rem;
  row-gap: 1.5rem;
`

export const SearchButton = styled.div`
  width: max-content;

  border-radius: 5px;
  padding: 0.5rem 0.75rem;

  background-color: white;
  border: 1px solid #000000;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    outline: 1px solid #000000;
    background-color: lightgray;
  }
`

export const HiddenInput = styled.input`
  display: none;
`

export const DragHandler = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  border-radius: 10px;
`
