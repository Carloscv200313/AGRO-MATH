import React from 'react';

export const Planificacion = () => {
    return (
        <div className="flex items-center justify-center bg-transparent p-10  rounded-3xl">
            <div
                className="h-full md:w-auto w-full bg-[#24233b] rounded-lg shadow-[0px_10px_10px_rgb(73,70,92)] 
                transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0px_10px_10px_rgb(0,0,0)]"
            >
                <div className="flex items-center pl-10 pt-4">
                    {/* Window control dots */}
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="p-4 overflow-x-auto">
                    <p className="text-white text-lg mb-4 mx-4">Código para la planificación de cultivos:</p>
                    <pre className="p-4 bg-gray-800 rounded-lg text-white font-mono text-xs">
                        <code>
                            {`// Solicitar las dimensiones del terreno
disp("Ingrese las dimensiones del terreno (en metros):");
largo = input("Largo del terreno (m): ");
ancho = input("Ancho del terreno (m): ");

// Convertir las dimensiones a centímetros
largo_cm = largo * 100;
ancho_cm = ancho * 100;

// Datos para los cultivos
// Rábanos: 3 cm entre plantas, 30 cm entre filas
espacio_rabano = 3; // cm entre plantas
espacio_fila_rabano = 30; // cm entre filas

// Lechugas: 20-30 cm entre plantas, 50-60 cm entre filas
espacio_lechuga = 25; // cm entre plantas (promedio)
espacio_fila_lechuga = 55; // cm entre filas (promedio)

// Calcular la cantidad de rábanos y lechugas
num_rabanos = floor(largo_cm / espacio_rabano) * floor(ancho_cm / espacio_fila_rabano);
num_lechugas = floor(largo_cm / espacio_lechuga) * floor(ancho_cm / espacio_fila_lechuga);

// Mostrar resultados
disp("Resultados:");
disp("Cantidad aproximada de rábanos que caben en el terreno: " + string(num_rabanos));
disp("Cantidad aproximada de lechugas que caben en el terreno: " + string(num_lechugas));`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
