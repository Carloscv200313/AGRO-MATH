import React from 'react'
import { Crecimiento } from './Codigos/Crecimiento'
import CalculoMetodoEuler from './Calculos/Crecimiento'

export const Crecimiento_plantas = () => {
    return (
        <div>
        <div>
            <h1 className='text-5xl text-center p-5 text-gray-700 font-bold'>Crecimiento de Plantas</h1>
            <div className='md:grid md:grid-cols-2 md:px-14'>
                <Crecimiento/>
                <CalculoMetodoEuler/>
            </div>
        </div>
    </div>
    )
}
