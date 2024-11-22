"use client";
import React, { useState } from 'react';

const CalculoMetodoEuler = () => {
    // Definir los parámetros y el estado
    const [N, setN] = useState<number>(0); // Número de días
    const [resultados, setResultados] = useState<string[]>([]); // Almacenar los resultados
    const [C_euler, setC_euler] = useState<number>(15); // Valor inicial de C_euler

    const r = 0.2; // Parámetro r
    const K = 150; // Parámetro K
    const h = 1; // Paso de integración

    // Función para calcular el método de Euler
    const calcularEuler = () => {
        const resultadosCalculados: string[] = [];
        let C_euler_local = C_euler;

        for (let n = 1; n <= N; n++) {
            const f = r * C_euler_local * (1 - C_euler_local / K);
            C_euler_local = C_euler_local + h * f;
            resultadosCalculados.push(`${n}: ${C_euler_local.toFixed(2)}`);
        }

        // Establecer los resultados en el estado
        setN(0)
        setResultados(resultadosCalculados);
        setC_euler(15); // Actualizar el valor final de C_euler
    };

    return (
        <div className="flex items-center justify-center  bg-transparent p-5">
            <div className="bg-[#24233b] p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl text-white font-semibold mb-6 text-center">Cálculo del Método de Euler</h1>

                {/* Formulario para ingresar N (número de días) */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="nDias" className="text-white">Número de días (N):</label>
                        <input
                            id="nDias"
                            type="number"
                            value={N}
                            onChange={(e) => setN(Number(e.target.value))}
                            placeholder="Ingrese el número de días"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    <button
                        onClick={calcularEuler}
                        className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Calcular
                    </button>
                </div>

                {/* Resultados */}
                {resultados.length > 0 && (
                    <div className="mt-6 text-white">
                        <h2 className="text-lg font-semibold">Resultados:</h2>
                        <div className="space-y-2">
                            {resultados.map((resultado, index) => (
                                <p key={index}>{resultado}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalculoMetodoEuler;
