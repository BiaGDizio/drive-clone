import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%;
  align-items: center; */
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
  width: 80%;
  align-items: center;
  justify-content: space-between;
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
export const InputRename = styled.input`
  color: grey;
  padding: 10px 5px;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  margin-top: 10px;
  width: 80%;
`
