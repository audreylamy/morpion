import styled from 'styled-components'

export const WrapperGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100px * ${props => props.column})
`