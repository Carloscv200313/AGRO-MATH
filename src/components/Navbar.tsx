"use client"
import { useState } from "react";
import Link from "next/link"
import { IconMenu2, IconX } from '@tabler/icons-react';
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const rutas = [
        { ruta: "/", nombre: "Inicio" },
        { ruta: "somos", nombre: "¿Quienes somos?" },
        { ruta: "proceso", nombre: "Proceso" },
        { ruta: "consejos", nombre: "Consejos" },
    ]
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="relative">
                {/* Menú para pantallas grandes */}
                <div className="md:flex flex-row justify-evenly md:gap-10 gap-1 bg-[#c4d5b8] p-5 hidden">
                    {rutas.map((ruta) => (
                        <div key={ruta.nombre} className="text-black md:text-xl font-semibold">
                            <Link href={ruta.ruta}>{ruta.nombre}</Link>
                        </div>
                    ))}
                </div>
                {/* Menú hamburguesa para pantallas pequeñas */}
                <div className="md:hidden bg-[#c4d5b8] flex justify-end p-2">
                    <button onClick={toggleMenu} className="p-2">
                        <IconMenu2 stroke={2} className="text-zinc-950" />
                    </button>
                </div>
                {/* Menú desplegable móvil */}
                {isOpen && (
                    <div className="absolute inset-0 md:hidden h-screen bg-[#c4d5b8] flex flex-col items-center justify-center gap-6 z-50">
                        <button 
                            className="absolute top-2 right-2 rounded-full "
                            onClick={() => setIsOpen(false)}>
                            <IconX stroke={2} className="text-red-800" />
                        </button>
                        {rutas.map((ruta) => (
                            <Link
                                key={ruta.nombre}
                                href={ruta.ruta}
                                className="text-black text-lg font-semibold"
                                onClick={() => setIsOpen(false)}
                            >
                                {ruta.nombre}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    )
}
