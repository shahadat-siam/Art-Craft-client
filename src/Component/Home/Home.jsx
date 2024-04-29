import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import CraftItem from "./Craftsection/CraftItem";
import ArtCraftCategories from "./ArtCraftCategories";

const Home = () => {
  const item = useLoaderData().slice(0,6);  
  return (
    <div>
      <Banner />

      <div>
        <h2 className="text-4xl font-bold text-center my-4 text-orange-400">Craft Items Section</h2>
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
