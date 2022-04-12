import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { monedas } from '../data/monedas'
import { useSelectMonedas } from '../hooks/useSelectMonedas'
import { Error } from './Error'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-top: 32px;
    padding: 10px;
    text-transform: uppercase;
    width: 100%;

    transition: background-color .3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

export const Formulario = ({ setMonedas }) => {

    const [ criptos, setCriptos ] = useState([])

    const [ error, setError ] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)

    const [ criptomoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {

        const consultarAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const response = await fetch(url)

            const result = await response.json()

            const arrayCriptos = result.Data.map(cripto => {

                const obj = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return obj
            })

            setCriptos(arrayCriptos)
        }

        consultarAPI()

    }, [])

    const handleSubmit = e => {

        e.preventDefault()

        if ([ moneda, criptomoneda ].includes('')) {

            setError(true)

            return
        }

        setError(false)

        setMonedas({
            moneda,
            criptomoneda
        })
    }


    return (

        <>

            {
                error && <Error>Todos los campos son obligatorios</Error>
            }

            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />

                <SelectCriptoMoneda />

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />

            </form>

        </>
    )
}