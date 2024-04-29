import { useLoaderData } from "react-router-dom";

 
const ViewDetails = () => {
    const loderData = useLoaderData()
    console.log(loderData)
    const {_id, name, photo, price, rating, stockStatus, subcategory, customization,description } = loderData;
    return (
        <div className="lg:m-6 lg:flex lg:px-8 px-3 gap-4">
             <div className="lg:w-[50%] p-8 bg-gray-100 rounded-xl">
                <img className="w-full" src={photo} alt="" />
             </div>
             <div className="lg:ml-6 p-4 mt-2 lg:max-w-[50%]">
                <h2 className="text-4xl font-bold text-start">{name}</h2>
                <h2 className="text-3xl font-semibold text-start text-[#007F73] mt-4">{subcategory}</h2>
                <div className="flex my-4 justify-between items-center lg:space-x-4">
                    <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">Price: {price}</span>    
                    <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017]">Rating: {rating}</span>
                    <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">customization: {customization}</span>
                </div>
                <div>
                    <p className="text-gray-500 text-start">{description}</p>
                </div>
                <div>
                <p className="my-4 shadow-lg text-white font-bold bg-[#007f72c4] px-3 py-[6px] cursor-pointer rounded">{stockStatus}</p>
                </div>
             </div>
        </div>
    );
};

export default ViewDetails;