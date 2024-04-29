import swal from "sweetalert";
import UseAuth from "../Hook/UseAuth";

const AddCraft = () => {
  const { user } = UseAuth() || {};

  const hundleAddCaft = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const description = form.description.value;
    const time = form.time.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const email = user.email;
    const displayName = user.displayName;

    const newCraft = {
      name,
      email,
      displayName,
      subcategory,
      price,
      rating,
      customization,
      description,
      time,
      stockStatus,
      photo,
    };
    console.log(newCraft);

    //----- send data to the server
    fetch(" http://localhost:5000/addcraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "success",
            text: "added successfully in database",
            icon: "success",
            dangerMode: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="lg:px-20 px-5">
      <h2 className="text-4xl font-bold text-center my-5">Add Craft Item </h2>
      <form
        onSubmit={hundleAddCaft}
        className="border border-gray-200 p-3 lg:p-5"
      >
        {/* ----form row--- */}
        <div className="md:flex gap-4  w-full">
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Item Name:
            </label>
            <input
              name="name"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder=" Item name"
            />
          </div>
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Subcategory Name:
            </label>
            <input
              name="subcategory"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="Subcategory Name"
            />
          </div>
        </div>

        {/* ----form row--- */}
        <div className="md:flex gap-4 w-full">
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Price:
            </label>
            <input
              name="price"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="Price"
            />
          </div>
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Rating :
            </label>
            <input
              name="rating"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder=" your rating "
            />
          </div>
        </div>

        {/* ----form row--- */}
        <div className="md:flex gap-4 w-full">
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Customization:
            </label>
            <input
              name="customization"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="example- yes, no"
            />
          </div>
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Description :
            </label>
            <input
              name="description"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="short description"
            />
          </div>
        </div>

        {/* ----form row--- */}
        <div className="md:flex gap-4 w-full">
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Processing Time:
            </label>
            <input
              name="time"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="processing_time"
            />
          </div>
          <div className="md:w-1/2 mt-2 flex flex-col items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Stock Status :
            </label>
            <input
              name="stockStatus"
              type="text"
              className="input w-full input-bordered join-item"
              placeholder="example- In stock, Made to Order"
            />
          </div>
        </div>

        {/* ----form row--- */}
        <div className="md:flex gap-4 w-full">
          <div className="w-full flex flex-col mt-2 items-start gap-2">
            <label className="font-semibold" htmlFor="">
              Photo:
            </label>
            <input
              name="photo"
              type="url"
              className="input w-full input-bordered join-item"
              placeholder="photo"
            />
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Add Craft"
            className="w-full bg-[#193686] font-bold mt-5 cursor-pointer rounded p-2 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
