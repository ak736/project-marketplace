import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "../../services/projects/ProjectDetailSlice";
import { MdBolt } from "react-icons/md";

const DetailPage = () => {
  const tags = ["React", "Three.js", "3D"];
  const {id} = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const projectDetail = useSelector((state) => state.projectDetail);
  const { projectInfo, loading, error } = projectDetail;

  useEffect(() => {
    dispatch(getProjectById(id));
    console.log("projectInfo", projectInfo);
    // eslint-disable-next-line
  }, [id, dispatch]);

  return (
    <div>
      <h2 className="truncate text-4xl py-2 text-center font-bold mb-0">
        {projectInfo.title}
      </h2>
      <div className="flex mt-0 flex-col md:flex-row items-start justify-between gap-6">
        <div className="my-8  h-[23rem] w-full">
          <img
            src={projectInfo.image}
            alt="project"
            className="w-full h-full rounded-md"
          />  
        </div>
          <div className="w-full lg:mt-8 md:h-[23rem] mt-0 md:mt-8">      
            <p className="md:mt-12 text-lg">
              Category: <span className="font-semibold text-base">{projectInfo.category}</span>
            </p>
            <p className=" mt-3 md:mt-8 text-lg ">
              Ratings: <span className="font-semibold text-base">{projectInfo.rating}/5.0</span>
            </p>
            <div className="flex  items-center mt-4 gap-2 md:mt-8 text-lg">
              <p>Tech Stack:</p>
              {projectInfo?.techStack?.split(',')?.map((tag) => (
                <p className=" bg-blue-100 px-2 rounded-md text-base">{tag}</p>
              ))}
            </div>
            
            <div className="flex items-center justify-between  gap-20 mt-4 bg-blue-50 p-4 rounded-md md:mt-8">
              <div className="px-3  py-2 ml-10 text-lg">
                <p >
                  Price: <span className="font-semibold text-base">${projectInfo.price}</span>
                </p>
              </div>
              <div className="mr-7">
              <Link to={"https://coingate.com/"} target="_blank">
                <button
                  // onClick={() => navigate("/detail/1")}
                  className="bg-blue-200 px-3 py-2 rounded-md font-semibold hover:bg-blue-400 text-base"
                >
                  Buy Project
                </button>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className=" font-semibold mb-4 text-2xl">Description:</h3>
        <p>{projectInfo.description}</p>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className=" font-semibold mb-2 text-2xl">Features:</h3>
        <ul>
          {projectInfo?.features?.map((feature,idx)=>
          <div className="flex items-center gap-2 mb-1">
            <MdBolt />
            <li>{feature}</li>
          </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
