import React from "react";
import { useNavigate } from 'react-router-dom'

const MyProjectCard = ({title,image,category,techStack,price,id,isDarkMode}) => {
  const navigate = useNavigate()
  const techStackArray = techStack.split(",")


  return (
    <div className={`max-w-[250px] bg-blue-50 p-2 rounded-md project ${isDarkMode ? 'bg-black text-black' : ''}`}>
      <img
        src={image}
        alt="project"
        className="w-[250px] h-[150px] rounded-md object-cover"
      />
      <p className="truncate font-medium mt-2">
        {title}
      </p>
      <p className="text-sm truncate">
        Category: <span className="font-semibold">{category}</span>
      </p>
      <div className="flex mt-2 gap-2">
        {techStackArray.map((tag,idx) => (
          <p key={idx} className="text-sm truncate bg-blue-100 px-2 rounded-md">{tag}</p>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm mt-2">
            Price: <span className="font-semibold text-lg">${price}</span>
          </p>
        </div>
        <div>
          <button onClick={()=>navigate(`/detail/${id}`)} className="bg-blue-200 text-sm px-3 py-2 rounded-md font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
