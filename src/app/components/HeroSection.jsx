"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return ( 
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left"> 
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                 ¡Hola!, soy{""}
                 </span>
                 <br></br>
                 <TypeAnimation
                 sequence={[
                    "Yuliana",
                    1000,
                    "Web Developer",
                    1000,
                    "AR/VR Developer",
                    1000,
                    "Administrador de Sistemas",
                    1000,
                    "Implementador de Marketing Digital",
                    1000,
                    "Administrador de Redes",
                    1000,
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
            />
            </h1>
        <p className="text-[#ADB7BE]  text-base sm:text-lg mb-6 lg:text-xl">
            Reflejo de la trayectoria y proyectos realizados. 
            </p>
            <div>
               
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3">
                    <a href="/CV-YRS.pdf" download className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">

                        Descargar CV</a>

                    </button>
  

            </div>
            </div> 
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                   <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex justify-center items-center">  
                    <Image
                    src="/images/hero-image.png"
                    alt="animada"
                    className="object-cover w-full h-full bg-center"
                    fill
                    />
                    </div>
                </div>
        </div>
    </section>
  );
  
};

export default HeroSection;