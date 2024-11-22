import React from 'react'

export const Instrucciones = () => {
    return (
        <div className="min-h-screen bg-sage-50 p-6 font-sans">
            <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
                <h1 className="text-2xl font-bold text-white bg-green-600 p-4">
                    Instrucciones:
                </h1>

                <div className="p-6 space-y-6">
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-green-800">Descargar e Instalar Scilab</h2>
                        <ol className="list-decimal list-inside space-y-1 text-green-700">
                            <li>Visita la página oficial de Scilab.</li>
                            <li>Descarga la versión adecuada para el sistema operativo del usuario (Windows, Mac, Linux).</li>
                            <li>Instala Scilab siguiendo el asistente de instalación.</li>
                        </ol>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-green-800">Crear el Código en Scilab</h2>
                        <ol className="list-decimal list-inside space-y-1 text-green-700">
                            <li>Abre Scilab una vez instalado y dirígete al botón SciNotes.</li>
                            <li>Crea un archivo nuevo en SciNotes: Ve a Archivo {'>'} Nuevo.</li>
                            <li>Copia el siguiente código en el editor (el código está arriba).</li>
                            <li>Guarda el archivo: Ve a Archivo {'>'} Guardar como.</li>
                            <li>Guarda el archivo con la extensión .sce (por ejemplo, calculadora_biohuerto.sce).</li>
                        </ol>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-green-800">Ejecutar el Código en Scilab</h2>
                        <ol className="list-decimal list-inside space-y-1 text-green-700">
                            <li>Abre Scilab.</li>
                            <li>Ve al menú Archivo {'>'} Abrir y selecciona el archivo que guardaste (calculadora_biohuerto.sce).</li>
                            <li>Una vez abierto, haz clic en el botón de Compilar (o presiona F5).</li>
                            <li>Ingresa las dimensiones del terreno cuando el programa lo solicite y presiona Enter.</li>
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}
