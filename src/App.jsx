import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import ImagenCripto from './img/imagen-criptos.png'
import { Formulario } from './components/Formulario'
import { Resultado } from './components/Resultado'
import { Spinner } from './components/Spinner'

const Contenedor = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
    @media (min-width: 992px) {
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

const Imagen = styled.img`
    display: block;
    margin: 100px auto 0 auto;
    max-width: 400px;
    width: 80%;
`

const Heading = styled.h1`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 34px;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    text-align: center;

    &::after {
        content: '';
        background-color: #66a2fe;
        display: block;
        height: 6px;
        margin: 10px auto 0 auto;
        width: 120px;
    }
`

function App() {

    const [monedas, setMonedas] = useState({})

    const [resultado, setResultado] = useState({})

    const [cargando, setCargando] = useState(false)

    useEffect(() => {

        if (Object.keys(monedas).length > 0) {

            const cotizarCripto = async () => {

                setCargando(true)

                setResultado({})

                const { moneda, criptomoneda } = monedas

                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

                const response = await fetch(url)

                const result = await response.json()

                setResultado(result.DISPLAY[criptomoneda][moneda])

                setCargando(false)
            }

            cotizarCripto()
        }

    }, [monedas])

    console.log(resultado)

    return (

        <Contenedor>

            <Imagen
                src={ImagenCripto}
                alt='Imágenes Criptomonedas'
            />

            <div>

                <Heading>Cotiza Criptomonedas al Instante</Heading>

                <Formulario
                    setMonedas={setMonedas}
                />

                { cargando && <Spinner /> }

                { resultado.PRICE && <Resultado resultado={resultado} /> } 

            </div>

        </Contenedor>
    )
}

export default App
