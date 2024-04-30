import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import CraftItem from "./Craftsection/CraftItem";
import ArtCraftCategories from "./ArtCraftCategories";
import OurClass from "./OurClass";
import Team from "./Team"; 

const Home = () => {
  const item = useLoaderData().slice(0,6);  
  return (
    <div>
      <Banner />
      <OurClass/>
      <Team/>
      <div>
        <h2 className="text-4xl font-semibold text-center my-7 text-[#554e9f]">Craft Items Section</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-10 lg:px-7">
          {item.map((item) => (
            <CraftItem key={item._id} item={item}></CraftItem>
          ))}
        </div>
      </div>
      <ArtCraftCategories/> 
    </div>
    
  );
};

export default Home;
