import React from "react";
import { useNavigate } from 'react-router-dom'

const MyProjectCard = ({title,image,category,techStack,price,id}) => {
  const navigate = useNavigate()
  const techStackArray = techStack.split(",")


  return (
    <div className="max-w-[250px] bg-blue-50 p-4 rounded-md transition ease-in-out delay-150 hover:scale-101 duration-300 hover:shadow-sm hover:shadow-black">
      <img
        src={image}
        alt="project"
        className="w-[250px] h-[150px] rounded-md object-cover"
      />
      <p className="truncate font-bold font-medium text-lg mt-4">
        {title}
      </p>
      <p className="text-xs truncate mt-2">
        Category: <span className="font-semibold">{category}</span>
      </p>
      <div className="flex mt-4 gap-2">
        {techStackArray.map((tag,idx) => (
          <p key={idx} className="text-sm font-semibold truncate bg-blue-100 px-2 rounded-md">{tag}</p>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm mt-2">
            Price: <span className="font-semibold text-lg">${price}</span>
          </p>
        </div>
        <div>
          <button onClick={()=>navigate(`/detail/${id}`)} className="bg-blue-200 text-sm px-3 py-2 rounded-md font-semibold hover:bg-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
