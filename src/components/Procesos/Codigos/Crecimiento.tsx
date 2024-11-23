import React from 'react'

export const Crecimiento = () => {
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
                    <p className="text-white text-lg mb-4 mx-4">Código para el crecimiento de Plantas:</p>
                    <pre className="p-4 bg-gray-800 rounded-lg text-white font-mono text-xs">
                        <code>
                            {`// Parámetros
r = 0.2;
K = 150;
h = 1;
N = input("Ingrese el número de días (N): ");
C_euler = 15;
 
disp("Método de Euler:");
for n = 1:N
 f = r * C_euler * (1 - C_euler / K);
 C_euler = C_euler + h * f;
 disp(string(n) + ": " + string(C_euler));
end`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}
