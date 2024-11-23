import React from 'react'
import { Optimizacion } from './Codigos/Optimizacion'
import IrrigationCalculator from './Calculos/Optimizacion'

export const Optimizacion_agua = () => {
    return (
        <div>
        <div>
            <h1 className='text-5xl text-center p-5 text-gray-700 font-bold'>Optimizacion del agua</h1>
            <div className='md:grid md:grid-cols-2 md:px-14'>
                <Optimizacion/>
                <IrrigationCalculator/>
            </div>
        </div>
    </div>
    )
}
