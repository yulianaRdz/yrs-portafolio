"use client"
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard'


const projectsData = [
    {
      id: 1,
      title: "Sitio web (HTML, CSS, JAVA).",
      description: "Sitio web para Pyme de Pscología.",
      image: "/images/projects/Pyme.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/yulianaRdz/Pyme-Psic.git",
      previewUrl: "https://psicalejandra-gonzalez.vercel.app/",
    },
    {
      id: 2,
      title: "Desarrollo y Administración (Diversos proyectos).",
      description: "Proyectos empleando diversas técnicas de sistemas.",
      image: "/images/projects/IUT.png",
      tag: ["All", "Proyectos"],
    },
    {
      id: 3,
      title: "AR Pathology (Realidad aumentada)",
      description: "Aplicación de realidad aumentada (Modelado 3D Blender, Unity, Blippar).",
      image: "/images/projects/ARportada.jpeg",
      tag: ["All", "AR"],
      gitUrl:"https://github.com/yulianaRdz/ARPathology.git",
      previewUrl: "https://github.com/yulianaRdz/ARPathology.git",

    },
    {
      id: 4,
      title: "Aplicación Móvil Control de Pagos GGA.",
      description: "Gestiona el sistema de pagos entre otras funcionalidades.",
      image: "/images/projects/App.jpeg",
      tag: ["All", "App"],
      gitUrl:"https://github.com/yulianaRdz/ControlPagos.git",
      previewUrl: "https://github.com/yulianaRdz/ControlPagos.git",
    },
  ];
  

const ProjectsSection = () => {
  return (
    
    <>
    <h2 id="proyectos" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Proyectos Destacados
        </h2>

    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
             <ProjectCard
              key={project.id} 
              title={project.title} 
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              
              />
            ))}
            </div>
    </>
  );
};

export default ProjectsSection