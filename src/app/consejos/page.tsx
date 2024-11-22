import { Consejo } from "@/components/Consejos/Consejo";
import { Agromath } from "@/components/Inicio/Agromath";

export default function Home() {
    return (
        <div className="bg-[#c4d5b8] min-h-[100vh]  text-black">
            <Agromath/>
            <Consejo/>
        </div>
    );
}