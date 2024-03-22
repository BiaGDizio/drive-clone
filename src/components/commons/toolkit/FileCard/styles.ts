import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  padding: 10px;

  border: 0.25px solid #eaeaea;
  border-radius: 4px;

  background-color: #f7f7f7;
  color: grey;

  &:hover {
    background-color: #eaeaea;
  }
`
