import React from 'react'
import styled, {keyframes} from 'styled-components'
import {ImSpinner2} from 'react-icons/im'

export const Wrapper = styled.div`
  display: flex;
  height: 96vh;
`

export const SidebarStyles = styled.div`
  width: 175px;
  border-right: 1px solid black;
  padding: 1rem;
`

export const Main = styled.div`
  flex: 1;
  padding: 1rem;
`

export const EpisodeStyles = styled.div`
  display: inline-block;
  border: solid 1px rgba(130, 130, 130, 0.3);
  padding: 1rem;
  color: inherit;
  width: 350px;
  margin: 16px;

  :hover {
    text-decoration: none;

    h3 {
      text-decoration: underline;
    }
  }
`

export const SeasonStyles = styled.div`
  display: inline-block;
  border: solid 1px rgba(130, 130, 130, 0.3);
  padding: 1rem;
  color: inherit;
  width: 185px;
  margin: 16px;

  :hover {
    text-decoration: none;

    h3 {
      text-decoration: underline;
    }
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export function Loader(props) {
    return (
        <ImSpinner2
            {...props}
            css={`
              vertical-align: middle;
              animation: ${rotate} 1s linear infinite;
            `}
        />
    )
}

export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;

  margin: 16px;
  gap: 16px;
  
  & > h5 {
    margin: 0;
  }
`
