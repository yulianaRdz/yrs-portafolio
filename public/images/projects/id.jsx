// pages/[id].jsx
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Image from "next/image";
import projectsData from "../data/projectsData";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <main className="flex flex-col bg-[#121212] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        {project.id === 3 ? (
          <>
            {/* Caso especial para AR Pathology */}
            <div className="text-center mb-8">
              <p className="text-white text-xl mb-4">AR Pathology</p>
              <div className="flex justify-center">
                {/* Carousel de imágenes y video */}
                <div className="carousel-container">
                  <Image
                    src="/images/projects/ARportada.jpeg"
                    alt="AR Pathology Image"
                    width={800}
                    height={500}
                    className="mx-auto"
                  />
                  <video
                    className="mx-auto mt-6"
                    controls
                    width="800"
                    height="500"
                  >
                    <source src="/videos/arpathology.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                  </video>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              {project.description}
            </p>
          </>
        ) : (
          <>
            {/* Para los demás proyectos */}
            <div className="flex justify-center mb-8">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="mx-auto"
              />
            </div>
            <p className="text-lg text-gray-300 mb-8">{project.description}</p>
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;
