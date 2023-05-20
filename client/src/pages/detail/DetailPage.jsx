import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "../../services/projects/ProjectDetailSlice";
import { MdBolt } from "react-icons/md";

const DetailPage = () => {
  const tags = ["React", "Three.js", "3D"];
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const projectDetail = useSelector((state) => state.projectDetail);
  const { projectInfo, loading, error } = projectDetail;

  // Get the dark mode state from the reducer
  const isDarkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(getProjectById(id));
    console.log("projectInfo", projectInfo);
    // eslint-disable-next-line
  }, [id, dispatch]);

  return (
    <div className={`h-screen ${isDarkMode? `bg-gray-900`: ''}`}>
      <div className={`detail-page ${isDarkMode ? "dark " : ""}`}>
      <h2 className={`truncate text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : ""}`}>
        {projectInfo.title}
      </h2>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="mb-6 w-full">
          <img
            src={projectInfo.image}
            alt="project"
            className="w-full rounded-md"
          />
        </div>
        <div className="w-full">
          <p className={`${isDarkMode? `text-white` : `text-black`}`}>
            Category:{" "}
            <span className={`font-semibold ${isDarkMode ? "text-white" : ""}`}>
              {projectInfo.category}
            </span>
          </p>
          <p className={`mt-3 ${isDarkMode ? "text-white" : ""}`}>
            Ratings:{" "}
            <span className={`font-semibold ${isDarkMode ? "text-white" : ""}`}>
              {projectInfo.rating}/5.0
            </span>
          </p>
          <div className="flex items-center mt-4 gap-2">
            <p className={`${isDarkMode? `text-white` : `text-black`}`}>Tech Stack:</p>
            {projectInfo?.techStack?.split(",")?.map((tag) => (
              <p
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-blue-100"
                } px-2 rounded-md ${isDarkMode ? "text-white" : ""}`}
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
          <div className={`flex items-center justify-between gap-20 mt-4 bg-blue-50  p-4 rounded-md ${isDarkMode ? "text-white bg-gray-700" : ""}`}>
            <div>
              <p>
                Price:{" "}
                <span className="font-semibold">
                  ${projectInfo.price}
                </span>
              </p>
            </div>
            <div>
              <Link to={"https://coingate.com/"} target="_blank">
                <button
                  className={`${
                    isDarkMode
                      ? "bg-gray-600"
                      : "bg-blue-200"
                  } px-3 py-2 rounded-md font-semibold ${isDarkMode ? "text-white" : ""}`}
                >
                  Buy Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className={`my-5 ${isDarkMode? `text-gray-800`:``}`} />
      <div>
  <h3 className={`font-semibold mb-4 ${isDarkMode ? "text-white" : ""}`}>
    Description:
  </h3>
  <p className={isDarkMode ? "text-white" : ""}>
    {projectInfo.description}
  </p>
</div>
<hr className="my-5" />
<div>
  <h3 className={`font-semibold mb-2 ${isDarkMode ? "text-white" : ""}`}>
    Features:
  </h3>
  <ul>
    {projectInfo?.features?.map((feature, idx) => (
      <div
        className={`flex items-center gap-2 mb-1 ${
          isDarkMode ? "text-white" : ""
        }`}
        key={idx}
      >
        <MdBolt />
        <li>{feature}</li>
      </div>
    ))}
  </ul>
</div>
</div>
    </div>
    
);
};

export default DetailPage;

