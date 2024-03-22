import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  padding-top: 2rem;
`
export const ListMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`
export const ListItem = styled.li`
  width: 100%;
  background-color: transparent;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  text-align: center;
  transition: all 0.15s ease-in-out;
  align-items: center;
  color: #888888;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* justify-content: space-between; */

  &:hover {
    background-color: #f3f3f3;
  }
`
export const ContainerIconMenu = styled.div`
  padding-right: 1rem;
  font-size: 20px;
`
