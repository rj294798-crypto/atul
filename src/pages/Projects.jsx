import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-orange-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I’ve embarked on a variety of impactful projects throughout my career,
        spanning multiple industries and regions. Each project has offered
        unique challenges and invaluable learning experiences—from developing
        advanced front-end interfaces and robust back-end systems to handling
        some DevOps tasks that shaped me into a versatile full-stack developer.
      </p>
      <p className="text-slate-500 mt-2 leading-relaxed">
        This blend of expertise enables me to quickly adapt to new technologies
        and deliver efficient, user-centered solutions tailored to diverse
        client needs.
      </p>
      <p className="text-slate-500 mt-2 leading-relaxed">
        Discover below some of the projects I’ve had the opportunity to work on:
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              //TO DO: Review slider
              <div className="w-full flex justify-center mt-6 mb-8">
                <div className="max-w-md lg:w-[400px]">
                  <Slider {...settings}>
                    {project.imageList?.map((img) => (
                      <img src={img} alt={"hi"} />
                    ))}
                  </Slider>
                </div>
              </div>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
