import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  column-gap: 2rem;

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
  overflow-y: auto;
`
export const ContainerFolders = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  gap: 4rem;
`

export const ContainerFiles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`
export const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
export const ContainerTypography = styled.div`
  padding: 10px 0;
`
export const ContainerNameFile = styled.div`
  padding-top: 10px;
`
export const ContainerTypeFile = styled.div`
  padding-top: 10px;
`
export const ContainerNameType = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 4rem;
`
export const HeaderDrive = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: grey;
`
export const ContainerSkeleton = styled.div`
  margin: 5px 0;
`
