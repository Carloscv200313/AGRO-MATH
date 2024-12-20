import { Agromath } from "@/components/Inicio/Agromath";
import { Crecimiento_plantas } from "@/components/Procesos/Crecimiento_plantas";
import { Cultivos } from "@/components/Procesos/Cultivos";
import { Instrucciones } from "@/components/Procesos/Instrucciones";
import { Optimizacion_agua } from "@/components/Procesos/Optimizacion_agua";

export default function Home() {
    return (
        <div className="bg-[#c4d5b8] min-h-[100vh]  text-black">
            <Agromath/>
            <Instrucciones/>
            <Cultivos/>
            <Crecimiento_plantas/>
            <Optimizacion_agua/>
        </div>
    );
}