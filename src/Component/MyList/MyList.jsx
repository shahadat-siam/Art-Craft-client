import { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import MylistCard from "./MylistCard";
import { FaAngleDown } from "react-icons/fa";

const MyList = () => {
  const { user } = UseAuth();
  const [item, setItem] = useState();
  const [displayItems, setDisplayItems] = useState([])
  const craft = item;
  console.log(displayItems)

  const hundleItemFilter = filter => {
    if(filter === 'Yes'){
      const yes = item.filter(item => item.customization === 'yes')
      setDisplayItems(yes)
    } else if(filter === 'No'){
      const no = item.filter(item => item.customization === 'no')
      setDisplayItems(no)
    }
  }

  useEffect(() => {
    fetch(`https://y-three-wine.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setDisplayItems(data)
        // console.log(data)
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-5 text-[#554e9f]">
        My craft item list
      </h2>

      <div>
        <details className="dropdown">
          <summary className="m-1 btn text-purple-500">
            Customization <FaAngleDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 border border[#007F73]   ">
            <li className="flex items-center">
              <a onClick={() => hundleItemFilter('Yes')} className="text-purple-500 text-center">Yes</a>
            </li>
            <li className="flex items-center">
              <a onClick={() => hundleItemFilter('No')} className="text-purple-500 text-center">No</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-3 lg:px-8">
        {displayItems?.map((itm) => (
          <MylistCard key={itm._id} item={itm} craft={craft}></MylistCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
