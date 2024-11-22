const MissionVision = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 h-full p-10">
            <div >
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-green-800 text-center">
                    NUESTRA MISIÓN
                </h2>
                <div className="rounded-2xl bg-green-600/90 p-6 text-white shadow-lg transition-transform hover:scale-[1.02]">
                    <p className="text-lg ">
                        Inspirar a las estudiantes a través de un aprendizaje práctico e innovador,
                        integrando la ciencia, las matemáticas y la tecnología para implementar y
                        gestionar un biohuerto sostenible. Promovemos el conocimiento aplicado
                        mediante el uso de herramientas como Scilab, fortaleciendo sus habilidades
                        en programación, cuidado del medio ambiente y responsabilidad social.
                    </p>
                </div>
            </div>
            <div >
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-green-800 text-center">
                    NUESTRA VISIÓN
                </h2>
                <div className="rounded-2xl bg-green-600/90 p-6 text-white shadow-lg transition-transform hover:scale-[1.02]">
                    <p className="text-lg ">
                        Ser un referente educativo en la integración de tecnología y
                        sostenibilidad en el ámbito escolar, fomentando la formación de
                        jóvenes comprometidas con el medio ambiente, capaces de aplicar
                        conocimientos científicos y tecnológicos para generar soluciones
                        prácticas y sostenibles en su entorno.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MissionVision;