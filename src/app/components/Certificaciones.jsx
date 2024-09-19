
import React from 'react'
import CertCard from './CertCard'


const projectsData = [
    {
      id: 1,
      title: "XVIII Expo Regional Emprendedora Anfeca 2024",
      description: "Concurso en donde se participó con 'E-DigitalLeap', el cuál demuestra el avance y mejora de los negocios en la transformación digital.",
      image: "/images/projects/Anfeca.png",
      tag: ["All", "Web"],
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Liciencia Profesional",
      description: "Doble titulación con la IUT Bayonne, Francia. Se abarcaron temas tales como Unix/Linux, Programación epecífica de Kubernetes, Supervision y Seguridad de Redes, entre otros.",
      image: "/images/projects/LP.png",
      tag: ["All", "Proyectos"],
      previewUrl: "/",
    },

    {
      id: 3,
      title:"Reconocimiento Consejero de JuventudEs Grandeza 2024",
      description: "En conjunto con JuventudEs, llevé a cabo junto con el equipo de trabajo, talleres y conferencias del área de TI para la implementación de proyectos llevados a cabo por alumnos de preparatoria.",
      image: "/images/projects/Consejo.png",
      tag: ["All", "AR"],
      previewUrl: "/src/app/projects/page.jsx",
    },
    {
      id: 4,
      title: "Participación en República Escolar 2024.",
      description: "A través del análisis de las necesidades de mi universidad, en conjunto con los participantes en la república escolar, se identificaron puntos críticos para la mejora de procesos internos y externos.",
      image: "/images/projects/Republica.jpeg",
      tag: ["All", "App"],
      previewUrl: "/",
    },
  ];
  

const Certificaciones = () => {
  return (
    <>
    <h2 id="certificaciones" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Certificaciones
        </h2>

    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
             <CertCard
              key={project.id} 
              title={project.title} 
              description={project.description}
              imgUrl={project.image}
              tags={project}
              previewUrl={project.previewUrl}
              />
            ))}
            </div>
    </>
  );
};

export default Certificaciones