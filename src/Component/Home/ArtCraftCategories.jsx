import { useLoaderData } from "react-router-dom";

 
const ArtCraftCategories = () => {
    const item = useLoaderData()
    console.log(item)
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-5">Art & Craft Categories Section:</h2>
        </div>
    );
};

export default ArtCraftCategories;