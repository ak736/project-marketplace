import React, { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../services/projects/ProjectSlice";
import { BsSearch } from "react-icons/bs";
const HomePage = () => {
  const projectList = useSelector((state) => state.project);
  const { loading, allProjects, error, page, pages } = projectList;
  const [searchBar, setSearchBar] = React.useState("");
  const dispatch = useDispatch();
  console.log(allProjects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="pl-4">
          <h2 className="font-semibold text-lg">Welcome to ProjectMart!</h2>
          <p className="text-sm text-gray-500">Browse the projects</p>
        </div>
        <div class="search-wrapper w-1/4 pr-4">
          <div class="search w-full relative flex items-center">
            <input
              type="text"
              class="w-full p-1 h-full rounded text-gray-500"
              placeholder="What are you looking for?"
              onChange={(e) => {
                setSearchBar(e.target.value);
                console.log(searchBar);
              }}
              value={searchBar}
            />
            <button
              type="submit"
              class="w-10 h-8 bg-blue-500 text-center text-white cursor-pointer text-xl flex items-center justify-center rounded"
            >
              <BsSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-evenly gap-6 mt-6 ">
        {searchBar === "" &&
          allProjects?.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              title={project.title}
              image={project.image}
              techStack={project.techStack}
              category={project.category}
              price={project.price}
            />
          ))}
        {searchBar !== "" &&
          allProjects
            ?.filter((project) =>
              project.title.toLowerCase().includes(searchBar.toLowerCase())
            )
            .map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                title={project.title}
                image={project.image}
                techStack={project.techStack}
                category={project.category}
                price={project.price}
              />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
