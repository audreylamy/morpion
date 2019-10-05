import styled from 'styled-components'

export const WrapperCell = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border: 1px solid #fde483;
    margin: 2px;
    transform: ${props => props.mouseEnter ? "scale(1.05)" : null };
    transition: all .3s ease-out;
`

export const WrapperSign = styled.div`
    font-size: 40px;
    color: red;
`