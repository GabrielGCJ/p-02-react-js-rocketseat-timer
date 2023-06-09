import styled from 'styled-components'

export const LayoutContainer = styled.div`
  /* max-width: 47rem; */

  max-width: 74rem;

  /* height: calc(100vh - 10rem); */

  height: auto;
  margin: 5rem auto;

  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
