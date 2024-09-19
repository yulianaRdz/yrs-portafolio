"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import Navbar from './Navbar';
const TAB_DATA =[
    {
        title: "Habilidades",
        id: "habilidades",
        content: (
            <ul className="list-disc pl-2">
            <li>Python.</li>
            <li>Javascript.</li>
            <li>Desarollo Front-End (HTML, CSS).</li>
            <li>Base de datos relacionales y no relacionales.</li>
            <li>Sistemas Operativos.</li>
            <li>Programas: Unity, Blender, PowerBi, Jira, Adobe Ilustrador.</li>
            <li>Inglés nativo (Nivel B2 TOEFL ITP).</li>

            </ul>
        ),
    },

    {
        title: "Formación",
        id: "formación",
        content: (
            <ul className="list-disc pl-2">
            <li>Ingeniería en Entornos Virtuales y Negocios Digitales.</li>
            <li>Liciencia Profesional en Administración de Sistemas y Redes.</li>
            <li>Técnico Superior Universitario en Tecnologías de la Información Área Entornos Virtuales y Negocios Digitales.</li>
            </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experiencia",
        content: (
            <ul className="list-disc pl-2">
            <li>XVII Expo Regional Emprendedora Anfeca 2024.</li>
            <li>Cursos de Arduino, Desarrollo Móvil y Base de Datos.</li>
            <li>Club de Desarrollo 2023-2024.</li>
            <li>Impartición de clases del idioma Inglés en comunidades.</li>
            <li>Cursos en proceso: Ciencia de Datos y Python.</li>
            <li>Certificación en proceso: Economía Digital 2024.</li>

            </ul>
        ),
    },

];

const AboutSection = () => {
    const [tab, setTab] = useState("habilidades");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
     <section id="sobremi" className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/abt.png" width={500} height={500} />
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Sobre mí</h2>
        <p className="text-base md:text-lg">Soy una profesional con un enfoque técnico en áreas clave de TI, mi experiencia 
            contribuye a la transformación digital de las empresas, integrando soluciones 
            tecnológicas innovadoras para optimizar procesos y mejorar la presencia digital. 
            Me caracterizo por ser determinada y eficiente, siempre buscando la manera de aprender 
            y fortalecer habilidades.
             </p>
            <div className="flex flex-row justify-start mt-8">
                <TabButton
                 selectTab={() => handleTabChange("habilidades")}
                  active={tab === "habilidades"}
                  >
                    {" "}
                    Habilidades {" "} 
                    </TabButton> 
                <TabButton
                 selectTab={() => handleTabChange("formación")}
                  active={tab === "formación"}
                  >
                    {" "}
                    Formación {" "} 
                </TabButton> 
                <TabButton
                 selectTab={() => handleTabChange("experiencia")}
                  active={tab === "experiencia"}
                  >
                    {" "}
                    Experiencia {" "} 
                </TabButton> 
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}

            </div>
    </div>
    </div>
    </section>
  );
};

export default AboutSection;