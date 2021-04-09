import ProjectData from '../assets/data/projects.json';
import Card from './Card';

const Projects = () => {
  const projects = ProjectData;

  return (
    <div>
      {projects &&
        projects.map((status) => {
          const type = Object.keys(status)[0];

          return (
            <>
              <h3 className='mt-12 text-2xl capitalize'>{type}</h3>
              <div className='grid grid-cols-3 gap-12 mt-6' key={type}>
                {status[type].map((project) => {
                  return (
                    <Card
                      title={project.name}
                      image={project.image}
                      github={project.github}
                      link={project.live}
                      tech={project.tech}
                      api={project.api}
                    >
                      <ul>
                        {project.highlights.map((highlight, index) => {
                          return <li key={index}>- {highlight}</li>;
                        })}
                      </ul>
                    </Card>
                  );
                })}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Projects;
