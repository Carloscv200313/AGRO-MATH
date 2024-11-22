import React from 'react'

export const Consejo = () => {
    return (
        <div className="bg-gray-100 p-6 font-sans">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    CONSEJOS:
                </h1>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Riego Eficiente */}
                    <div className="rounded-lg bg-blue-100 p-4 shadow-md border-2 border-blue-300">
                        <h2 className="mb-3 text-center text-lg font-semibold text-blue-800">
                            Riego Eficiente
                        </h2>
                        <ul className="space-y-2 text-blue-700">
                            <li>• Regar en la mañana o al atardecer.</li>
                            <li>• Utilizar riego por goteo para ahorrar agua.</li>
                            <li>• Monitorear la humedad del suelo para evitar excesos.</li>
                        </ul>
                    </div>

                    {/* Uso de Scilab */}
                    <div className="rounded-lg bg-purple-100 p-4 shadow-md border-2 border-purple-300">
                        <h2 className="mb-3 text-center text-lg font-semibold text-purple-800">
                            Uso de Scilab
                        </h2>
                        <ul className="space-y-2 text-purple-700">
                            <li>• Experimentar con el terreno y distancias en el programa.</li>
                            <li>• Ajustar según los resultados de cada temporada.</li>
                        </ul>
                    </div>

                    {/* Mantenimiento del suelo */}
                    <div className="rounded-lg bg-orange-100 p-4 shadow-md border-2 border-orange-300">
                        <h2 className="mb-3 text-center text-lg font-semibold text-orange-800">
                            Mantenimiento del suelo
                        </h2>
                        <ul className="space-y-2 text-orange-700">
                            <li>• Mantenimiento del suelo</li>
                            <li>• Fertilización</li>
                            <li>• Control de plagas</li>
                        </ul>
                    </div>

                    {/* Optimización del Espacio */}
                    <div className="rounded-lg bg-teal-100 p-4 shadow-md border-2 border-teal-300">
                        <h2 className="mb-3 text-center text-lg font-semibold text-teal-800">
                            Optimización del Espacio
                        </h2>
                        <ul className="space-y-2 text-teal-700">
                            <li>• Planificar la siembra según el espacio y distancia entre plantas.</li>
                            <li>• Usar la altura de las plantas para aprovechar la luz solar.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
