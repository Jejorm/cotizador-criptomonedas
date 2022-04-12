import styled from '@emotion/styled'

const Contenedor = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    font-family: 'Lato', sans-serif;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

export const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (

        <Contenedor>

            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt='Imagen Cripto'
            />

            <div>

                <Precio>Precio es de: <span>{PRICE}</span></Precio>

                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>

                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>

                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>

                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>

            </div>

        </Contenedor>
    )
}