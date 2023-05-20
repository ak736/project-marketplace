import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectCard = ({ title, image, category, techStack, price, id }) => {
  const navigate = useNavigate();
  const techStackArray = techStack.split(",");
  const darkMode = useSelector((state) => state.darkMode); // Access the dark mode state from Redux

  return (
    <div className={`max-w-[250px] ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} p-2 rounded-md`}>
      <img
        src={image}
        alt="project"
        className="w-[250px] h-[150px] rounded-md object-cover"
      />
      <p className={`truncate font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
        {title}
      </p>
      <p className={`text-sm truncate ${darkMode ? 'text-gray-300' : 'text-black'}`}>
        Category: <span className="font-semibold">{category}</span>
      </p>
      <div className="flex mt-2 gap-2">
        {techStackArray.map((tag, idx) => (
          <p key={idx} className={`text-sm truncate ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-black'} px-2 rounded-md`}>{tag}</p>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
            Price: <span className="font-semibold text-lg">${price}</span>
          </p>
        </div>
        <div>
          <button onClick={() => navigate(`/detail/${id}`)} className={`bg-blue-200 text-sm px-3 py-2 rounded-md font-semibold ${darkMode ? 'text-gray-800' : 'text-black'}`}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
