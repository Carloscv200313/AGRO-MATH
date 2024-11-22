import { Agromath } from "@/components/Inicio/Agromath";
import MissionVision from "@/components/Inicio/Mision_Vision";

export default function Home() {
  return (
    <div className="bg-[#c4d5b8] min-h-[150vh]  text-black">
      <Agromath />
      <div className="flex flex-col justify-center items-center ">
        <p className="font-semibold text-xl m-5 " >
          Donde la naturaleza y los números se encuentran
        </p>
        <h1 className="font-bold text-5xl font-serif mb-10 text-center">
          ¿Quienes somos?
        </h1>
        <p className="font-semibold text-xl md:mx-16 mx-5">En AGROMATH, somos un proyecto educativo innovador que une ciencia, tecnología y sostenibilidad para transformar el aprendizaje en el aula.
          Nuestra misión es implementar un biohuerto en el colegio,
          integrando herramientas matemáticas y tecnológicas para que las alumnas no solo cultiven la tierra, sino también su conocimiento.
        </p>
      </div>
      <MissionVision/>
    </div>
  );
}
