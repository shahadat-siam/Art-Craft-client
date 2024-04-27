import { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import MylistCard from "./MylistCard";

 
const MyList = () => {
    const {user} = UseAuth()
    const [item, setItem] = useState()
    console.log(item)

    useEffect(() => {
        fetch(`http://localhost:5000/mylist/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
            // console.log(data)
        })
    }, [user])

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-5">My craft item list</h2>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-3 lg:px-8"> 
                {
                    item?.map(itm => <MylistCard key={itm._id} item={itm}></MylistCard>)
                }
             </div>
        </div>
    );
};

export default MyList;