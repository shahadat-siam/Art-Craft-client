import { useLoaderData } from "react-router-dom";
import AllCraftCard from "./AllCraftCard";

 
const AllArtCraft = () => {
    const item = useLoaderData() 
 
    console.log(item)
    return (
        <div>
            <h2 className="text-4xl font-bold my-6 text-center">All Art & craft Items</h2>
            <div className="grid md:grid-cols-2 p-3 lg:px-8 gap-3 lg:grid-cols-3">
                {
                    item.map(itm => <AllCraftCard key={itm._id} item={itm}></AllCraftCard>)
                }
            </div>
        </div>
    );
};

export default AllArtCraft;