import { useLoaderData } from "react-router-dom";
import Card from "./Card";

 
const ArtCraftCategories = () => {
    const item = useLoaderData().slice(6,12)
    console.log(item)
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mt-8 py-2 text-[#554e9f]">Art & Craft Categories Section</h2>
            <div className="grid md:grid-cols-3 p-3 lg:px-8 gap-3 lg:grid-cols-4">
                {
                    item.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default ArtCraftCategories;