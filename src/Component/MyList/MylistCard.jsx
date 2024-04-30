import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MylistCard = ({ item, craft }) => {
  // const [art, setArt] = useState(craft)
  // console.log(art)

  const { _id, name, photo, price, rating, stockStatus, customization } = item;
  // console.log(item)

  const hundleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://y-three-wine.vercel.app/mylist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
              // const remaining = art.filter(craft => craft._id !== _id)
              // setArt(remaining)
              // console.log(art)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card border border-gray-200 shadow-md p-0">
        <figure className="relative">
          <img className="h-60   w-full" src={photo} alt="comming soon" />
          <p className="absolute left-4 bottom-4 shadow-lg text-white font-bold bg-[#007f72c4] px-3 py-[6px] cursor-pointer rounded">
            {stockStatus}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#007F73]">{name}</h2>
          <p className="flex items-start my-2 text-purple-300">
            Customization: {customization}
          </p>
          <div className="flex  justify-between items-center">
            <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">
              Price: {price}
            </span>
            <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017]">
              Rating: {rating}
            </span>
            {/* <span className="flex px-3 py-[6px] rounded-sm font-semibold text-center text-[#ffa500] bg-[#ffa60017] ">customization: {customization}</span> */}
          </div>
          <div className="card-actions justify-center gap-4 mt-5">
            <Link to={`/update/${_id}`}>
              <button className="px-5 py-2 rounded border border-[#007F73] font-bold text-[#007F73] hover:bg-[#007f7242]">
                Update
              </button>
            </Link>
            <button
              onClick={() => hundleDelete(_id)}
              className="px-5 py-2 rounded border border-[purple] font-bold text-[purple] hover:bg-[#80008027] "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MylistCard;
