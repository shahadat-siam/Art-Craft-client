import { FaArrowRightLong } from "react-icons/fa6";

const OurClass = () => {
  return (
    <div className="lg:px-8 mt-5 px-3">
      <div className="flex  my-6 flex-col lg:max-w-[600px] mx-auto">
        <h4 className="text-rose-400 text-xl font-serif" >Our Class</h4>
        <h2 className="text-4xl py-2 font-semibold text-[#554e9f]">Choose The Best Class For You</h2>
        <p>The goal of this unit is to introduce students to the basic elements of art (color, line, shape, form, and texture) and to show students how artists use these elements in different ways in their work.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-7 lg:grid-cols-3 ">
        <div className=" shadow-lg px-5 py-9 flex flex-col justify-start rounded-lg">
            <img className="w-24" src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/painting.png" alt="" />
            <h2 className="text-3xl py-3 font-semibold text-start  text-[#007F73]">Panting Class</h2>
            <p className="text-start">A painter is an artist who uses a brush to daub colors onto paper or canvas. The person who tints your bedroom walls pink at your request is also a painter. </p>
            <p className="text-red-500 py-3 flex items-center mt-2">READ MORE <FaArrowRightLong /></p>
        </div>

        <div className="shadow-lg px-5 py-9 flex flex-col justify-start rounded-lg">
            <img className="w-24" src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/sketch.png" alt="" />
            <h2 className="text-3xl py-3  text-[#007F73] font-semibold text-start">Sketch Class</h2>
            <p className="text-start">A painter is an artist who uses a brush to daub colors onto paper or canvas. The person who tints your bedroom walls pink at your request is also a painter. </p>
            <p className="text-red-500 py-3 flex items-center mt-2">READ MORE <FaArrowRightLong /></p>
        </div>

        <div className="shadow-lg px-5 py-9 flex flex-col justify-start rounded-lg">
            <img className="w-24" src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/drawing.png" alt="" />
            <h2 className="text-3xl py-3  text-[#007F73] font-semibold text-start">Drawing Class</h2>
            <p className="text-start">A painter is an artist who uses a brush to daub colors onto paper or canvas. The person who tints your bedroom walls pink at your request is also a painter. </p>
            <p className="text-red-500 py-3 flex items-center mt-2">READ MORE <FaArrowRightLong /></p>
        </div>

        <div className="shadow-lg px-5 py-9 flex flex-col justify-start rounded-lg">
            <img className="w-24" src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/pottery.png" alt="" />
            <h2 className="text-3xl py-3  text-[#007F73] font-semibold text-start">Pottery Class</h2>
            <p className="text-start">A painter is an artist who uses a brush to daub colors onto paper or canvas. The person who tints your bedroom walls pink at your request is also a painter. </p>
            <p className="text-red-500 py-3 flex items-center mt-2">READ MORE <FaArrowRightLong /></p>
        </div> 

        <div className="shadow-lg px-5 py-9 flex flex-col justify-start rounded-lg">
            <img className="w-24" src="https://templatekit.jegtheme.com/articio/wp-content/uploads/sites/230/2022/01/digital-3A5FAQD.png" alt="" />
            <h2 className="text-3xl py-3  text-[#007F73] font-semibold text-start">Digital Art</h2>
            <p className="text-start">A painter is an artist who uses a brush to daub colors onto paper or canvas. The person who tints your bedroom walls pink at your request is also a painter. </p>
            <p className="text-red-500 py-3 flex items-center mt-2">READ MORE <FaArrowRightLong /></p>
        </div>
        <div className=" px-5 py-9 flex flex-col gap-4 bg-orange-100 items-center justify-center rounded-lg">
             <h2 className="text-2xl font-semibold">See All Classes That Can Increase Your Creativity</h2>
             <button className="bg-[#f74f4f] px-7 py-2 rounded-md text-white  font-semibold tracking-wider ">All CLASS</button>
        </div>
      </div>
    </div>
  );
};

export default OurClass;
