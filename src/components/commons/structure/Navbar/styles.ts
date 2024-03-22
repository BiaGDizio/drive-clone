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