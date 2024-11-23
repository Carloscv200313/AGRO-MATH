import React from 'react'

export const Optimizacion = () => {
    return (
        <div className="flex items-center justify-center bg-transparent p-10  rounded-3xl">
        <div
            className="md:w-auto w-full bg-[#24233b] rounded-lg shadow-[0px_10px_10px_rgb(73,70,92)] 
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
                <p className="text-white text-lg mb-4 mx-4">Código para optimizar el uso de agua en riego:</p>
                <pre className="p-4 bg-gray-800 rounded-lg text-white font-mono text-xs">
                    <code>
                        {`area = input("Ingrese el área a regar (en m²): "); 
ETo = input("Ingrese la evapotranspiración de referencia (en mm/día): ");
Kc = input("Ingrese el coeficiente del cultivo (Kc): ");
precipitacion = input("Ingrese la precipitación reciente (en mm): ");
eficiencia = input("Ingrese la eficiencia del sistema de riego (entre 0 y 1): "); 

if eficiencia <= 0 | eficiencia > 1 then
    disp("Error: La eficiencia debe estar entre 0 y 1.");
    quit;
end

ETc = Kc * ETo; 


deficit_hidrico = max(0, ETc - precipitacion); 

volumen_necesario = deficit_hidrico * area * 0.001 / eficiencia; 


disp("===== RESULTADOS =====");
disp("Necesidad hídrica del cultivo (ETc) en mm:");
disp(ETc);
disp("Déficit hídrico (mm):");
disp(deficit_hidrico);
disp("Volumen de agua necesario por día (m³):");
disp(volumen_necesario);`}
                    </code>
                </pre>
            </div>
        </div>
    </div>
    )
}
