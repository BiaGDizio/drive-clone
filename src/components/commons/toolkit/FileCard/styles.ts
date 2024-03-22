import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  border-left: none;
  border-right: none;

  color: grey;
  background-color: #f7f7f7;
`

export const ContainerIcon = styled.div`
  display: flex;
  /* column-gap: 1rem; */
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
`
export const ContainerDelete = styled.div`
  position: absolute;
  right: 1.5rem;
  display: none;
  top: 50%;
  transform: translateY(-50%);
  color: grey;
`
export const Div = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  column-gap: 0.25rem;
  padding: 0.5rem 4rem;
  padding-left: 0.5rem;

  border: 0.25px solid #eaeaea;

  &:hover {
    background-color: #eaeaea;

    .Delete {
      display: block;
    }
  }
`

export const ActionButtonWrapper = styled.div`
  position: absolute;

  top: 50%;
  right: 1rem;

  transform: translateY(-50%);
`

export const ActionButtonContainer = styled.div`
  position: relative;

  display: flex;
  cursor: pointer;

  /* padding: 0.25rem; */
  margin-left: auto;
`
export const Wrapper = styled.div`
  width: max-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 1rem;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;

  border: 1px solid #eaeaea;
  background-color: #f7f7f7;
`
export const ContainerFileName = styled.div``
export const ContainerFileType = styled.div``
