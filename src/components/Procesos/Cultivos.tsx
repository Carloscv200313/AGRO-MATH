import React from 'react'
import { Planificacion } from './Codigos/Planificacion'
import CalculoPlanificacion from './Calculos/Planificacion'

export const Cultivos = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center p-5 text-gray-700 font-bold'>Planificación de cultivos</h1>
                <div className='md:grid md:grid-cols-2 md:px-14'>
                    <Planificacion />
                    <CalculoPlanificacion/>
                </div>
            </div>
        </div>
    )
}
