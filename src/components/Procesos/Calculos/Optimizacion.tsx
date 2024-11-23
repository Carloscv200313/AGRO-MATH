"use client";
import React, { useState } from "react";

const IrrigationCalculator: React.FC = () => {
    const [area, setArea] = useState<number | null>(null);
    const [ETo, setETo] = useState<number | null>(null);
    const [Kc, setKc] = useState<number | null>(null);
    const [precipitacion, setPrecipitacion] = useState<number | null>(null);
    const [eficiencia, setEficiencia] = useState<number | null>(null);
    const [results, setResults] = useState<{
        ETc: number;
        deficitHidrico: number;
        volumenNecesario: number;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const calculateIrrigation = () => {
        if (
            eficiencia === null ||
            eficiencia <= 0 ||
            eficiencia > 1 ||
            area === null ||
            ETo === null ||
            Kc === null ||
            precipitacion === null
        ) {
            setError("Error: La eficiencia debe estar entre 0 y 1 y todos los campos son obligatorios.");
            setResults(null);
            return;
        }

        const ETc = Kc * ETo; // Necesidad hídrica
        const deficitHidrico = Math.max(0, ETc - precipitacion); // Déficit hídrico
        const volumenNecesario = (deficitHidrico * area * 0.001) / eficiencia; // Volumen necesario

        setResults({
            ETc,
            deficitHidrico,
            volumenNecesario,
        });
        setError(null);
    };

    return (
        <div className="flex items-center justify-center bg-transparent p-5">
            <div className="bg-[#24233b] p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl text-white font-semibold mb-6 text-center">
                    Calculadora de Riego
                </h1>

                {/* Formulario de entrada */}
                <div className="space-y-4">
                    <div>
                        <label htmlFor="area" className="text-white">
                            Área a regar (en m²):
                        </label>
                        <input
                            id="area"
                            type="number"
                            value={area ?? ""}
                            onChange={(e) => setArea(Number(e.target.value))}
                            placeholder="Ingrese el área"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="eto" className="text-white">
                            Evapotranspiración de referencia (en mm/día):
                        </label>
                        <input
                            id="eto"
                            type="number"
                            value={ETo ?? ""}
                            onChange={(e) => setETo(Number(e.target.value))}
                            placeholder="Ingrese ETo"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="kc" className="text-white">
                            Coeficiente del cultivo (Kc):
                        </label>
                        <input
                            id="kc"
                            type="number"
                            value={Kc ?? ""}
                            onChange={(e) => setKc(Number(e.target.value))}
                            placeholder="Ingrese Kc"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="precipitacion" className="text-white">
                            Precipitación reciente (en mm):
                        </label>
                        <input
                            id="precipitacion"
                            type="number"
                            value={precipitacion ?? ""}
                            onChange={(e) => setPrecipitacion(Number(e.target.value))}
                            placeholder="Ingrese la precipitación"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="eficiencia" className="text-white">
                            Eficiencia del sistema de riego (entre 0 y 1):
                        </label>
                        <input
                            id="eficiencia"
                            type="number"
                            step="0.01"
                            value={eficiencia ?? ""}
                            onChange={(e) => setEficiencia(Number(e.target.value))}
                            placeholder="Ingrese la eficiencia"
                            className="w-full p-3 mt-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                    <button
                        onClick={calculateIrrigation}
                        className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Calcular
                    </button>
                </div>

                {/* Errores y Resultados */}
                {error && (
                    <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
                )}
                {results && (
                    <div className="mt-6 text-white">
                        <h2 className="text-lg font-semibold">Resultados:</h2>
                        <div className="space-y-2">
                            <p>
                                <strong>Necesidad hídrica del cultivo (ETc) en mm:</strong>{" "}
                                {results.ETc.toFixed(2)}
                            </p>
                            <p>
                                <strong>Déficit hídrico (mm):</strong>{" "}
                                {results.deficitHidrico.toFixed(2)}
                            </p>
                            <p>
                                <strong>Volumen de agua necesario por día (m³):</strong>{" "}
                                {results.volumenNecesario.toFixed(2)}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IrrigationCalculator;
