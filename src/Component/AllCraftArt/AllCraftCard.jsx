import { Link } from "react-router-dom";

 
const AllCraftCard = ({item}) => {
    const {_id, name, photo, price, rating, stockStatus, customization } = item;
    return (
        <div>
        <div className="card border border-gray-200 shadow-md p-0">
          <figure className="relative">
            <img className="h-60   w-full" src={photo} alt="comming soon" />
            <p className="absolute left-4 bottom-4 shadow-lg text-white font-bold bg-[#007f72c4] px-3 py-[6px] cursor-pointer rounded">{stockStatus}</p>
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl text-[#007F73]">{name}</h2>
            <p className="flex items-start my-2 text-purple-300">Customization: {customization}</p>
            <div className="flex  justify-between items-center">
              <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">Price: {price}</span>    
              <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017]">Rating: {rating}</span>
              {/* <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">customization: {customization}</span> */}
            </div>
            <div className="card-actions justify-center gap-4 mt-5">
              <Link to={`/details/${_id}`}><button className="px-5 py-2 rounded border border-[#007F73] font-bold text-[#007F73] hover:bg-[#007f7242]">View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllCraftCard;