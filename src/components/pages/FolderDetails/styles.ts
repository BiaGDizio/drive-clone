import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;

  background-color: #f7f7f7;
`
export const Aside = styled.aside`
  width: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  column-gap: 2rem;

  background-color: white;
`
export const FooterCopyright = styled.div`
  margin-top: auto;

  width: 100%;

  text-align: center;
  font-size: 15px;
  color: #888888;
`
// export const ContainerButtonLogout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;

//   padding: 10px;
// `
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
export const ContainerSubFolders = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  gap: 4rem;

  width: 100%;
`
export const ContainerFiles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`
