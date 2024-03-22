import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  padding: 0;
  column-gap: 2rem;
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
export const ContainerAttachmentsInput = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 2rem;
`
export const ContainerButtonLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 22rem;
`
export const Modal = styled.div`
  background-color: purple;
`
export const InputAddFolder = styled.input`
  background-color: blue;
`
export const ButtonSave = styled.button`
  background-color: green;
  border-radius: 4px;
  /* align-items: right; */
  padding: 6px 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`
export const ButtonCancel = styled.button`
  background-color: red;
  border-radius: 4px;
  /* align-items: left; */
  padding: 6px 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
`
export const ModalContent = styled.div`
  background-color: white;
  width: 10rem;
`
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`
