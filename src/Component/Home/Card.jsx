import { Link } from "react-router-dom";

 
const Card = ({item}) => {
    const {_id, name, photo } = item;
    return (
      <Link to="/allart">
        <div className="card border border-gray-200  p-0 rounded-none">
          <figure >
            <img className="h-48 opacity-70 transition duration-200 hover:opacity-100 w-full" src={photo} alt="comming soon" /> 
          </figure>
          <div className="card-body bg-blue-50">
            <h2 className="card-title font-bold text-2xl text-[#325753d7]">{name}</h2>  
          </div>
        </div>
      </Link>
    );
};

export default Card;