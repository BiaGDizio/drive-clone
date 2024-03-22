import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;

  background-color: #f7f7f7;
`
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  min-height: 100vh;
  width: 100%;

  padding: 2rem;
  row-gap: 0.75rem;

  /* background-color: red; */
`
export const ContainerButtonLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 10px;
`
export const ContainerFolders = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.75rem;
`

export const ContainerFolder = styled.div`
  background-color: purple;
`
