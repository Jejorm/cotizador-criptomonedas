import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
`

export const Error = ({ children }) => {

    return (

        <Texto>
            { children }
        </Texto>
    )
}