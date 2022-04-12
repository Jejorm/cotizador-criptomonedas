import { useState } from 'react'

import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 16px 0;
`

const Select = styled.select`
    border-radius: 10px;
    font-size: 18px;
    padding: 16px;
    width: 100%;
`

export const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (

        <>

            <Label>{label}</Label>

            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >

                <option value=''>Seleccione</option>

                {
                    opciones.map(opción => (
                        <option
                            key={opción.id}
                            value={opción.id}
                        >
                            {opción.nombre}
                        </option>
                    ))
                }

            </Select>

        </>
    )

    return [ state, SelectMonedas ]
}