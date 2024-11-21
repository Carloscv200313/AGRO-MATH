import Image from "next/image"

export const Agromath = () => {
    return (
        <div className="relative">
            <Image
                priority
                src={"/cultivos.jpg"}
                width={760}
                height={428}
                alt="Imagen de fondo"
                className="w-full max-h-[40vh] opacity-50 object-center"
            />
            <div className="absolute inset-0 flex flex-row items-center justify-center md:gap-10 ">
                <Image
                    src={"/logo.png"}
                    width={519}
                    height={480}
                    alt="Imagen de fondo"
                    className="w-auto md:h-[20vh] h-[15vh] "
                />
                <h1 className="text-black font-bold md:text-9xl text-4xl">AGROMATH</h1>
            </div>
        </div>
    )
}
