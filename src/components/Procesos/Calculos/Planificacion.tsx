"use client";
import React, { useState } from 'react';

const CalculoPlanificacion = () => {
    // Definir el estado para las dimensiones y los resultados
    const [largo, setLargo] = useState<number>(0);
    const [ancho, setAncho] = useState<number>(0);
    const [resultadoRabanos, setResultadoRabanos] = useState<number | null>(null);
    const [resultadoLechugas, setResultadoLechugas] = useState<number | null>(null);

    // Función para manejar el cálculo
    const calcularCultivos = () => {
        // Convertir las dimensiones a centímetros
        const largoCm = largo * 100;
        const anchoCm = ancho * 100;

        // Datos para los cultivos
        const espacioRabano = 3; // cm entre plantas
        const espacioFilaRabano = 30; // cm entre filas
        const espacioLechuga = 25; // cm entre plantas
        const espacioFilaLechuga = 55; // cm entre filas

        // Calcular la cantidad de rábanos y lechugas
        const numRabanos = Math.floor(largoCm / espacioRabano) * Math.floor(anchoCm / espacioFilaRabano);
        const numLechugas = Math.floor(largoCm / espacioLechuga) * Math.floor(anchoCm / espacioFilaLechuga);

        // Establecer los resultados en el estado
        setResultadoRabanos(numRabanos);
        setResultadoLechugas(numLechugas);
    };

    return (
        <div className="flex items-center justify-center bg-transparent p-5">
            <div className="bg-[#24233b] p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl text-white font-semibold mb-6 text-center">Calcular cantidad de cultivos</h1>

                {/* Formulario */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="largo" className="text-white">Largo del terreno (m):</label>
                        <input
                            id="largo"
                            type="number"
                            value={largo}
                            onChange={(e) => setLargo(Number(e.target.value))}
                            placeholder="Ingrese el largo en metros"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="ancho" className="text-white">Ancho del terreno (m):</label>
                        <input
                            id="ancho"
                            type="number"
                            value={ancho}
                            onChange={(e) => setAncho(Number(e.target.value))}
                            placeholder="Ingrese el ancho en metros"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <button
                        onClick={calcularCultivos}
                        className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Calcular
                    </button>
                </div>

                {/* Resultados */}
                {resultadoRabanos !== null && resultadoLechugas !== null && (
                    <div className="mt-6 text-white">
                        <h2 className="text-lg font-semibold">Resultados:</h2>
                        <p>Cantidad aproximada de rábanos que caben en el terreno: {resultadoRabanos}</p>
                        <p>Cantidad aproximada de lechugas que caben en el terreno: {resultadoLechugas}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalculoPlanificacion;
