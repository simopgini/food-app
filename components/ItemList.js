import { useState } from "react";
import {
  HiOutlineChevronLeft,
  HiOutlinePlusCircle,
  HiPlusCircle,
  HiMinusCircle,
  HiOutlineMinusCircle,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";

const ItemList = ({ items, removeItem, editItem }) => {
  const [count, setCount] = useState(0);

  const incrementCount = (item) => {
    item.count++;
    setCount(count + 1);
  };

  const reduceCount = (item) => {
    if (item.count > 0) {
      item.count--;
    }
    setCount(count + 1);
  };

  return (
    <ul className="grocery-list grid grid-cols-1 divide-y divide-slate-200">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="flex items-center justify-between  hover:bg-gray-light rounded-sm"
          >
            <div className="flex items-center space-x-2 my-3 hover:bg-gray-light">
              <input
                type="checkbox"
                className="appearance-none enabled:ring-green checked:ring-green text-green border-[#DEDCDC] checked:bg-gray-mid rounded-md h-6 w-6 mr-2"
              />
              <p className="text-dark-green text-sm">{item.title}</p>
            </div>
            <div className="flex text-dark-green space-x-2 text-sm">
              <HiMinusCircle
                onClick={() => reduceCount(item)}
                className="transition duration-300 hover:scale-110 h-5 w-5 text-green mr-2"
              ></HiMinusCircle>
              {item.count}
              <HiPlusCircle
                onClick={() => incrementCount(item)}
                className="transition duration-300 hover:scale-110 h-5 w-5 text-green"
              ></HiPlusCircle>
              <button>
                <HiOutlinePencilAlt
                  onClick={() => editItem(item.id)}
                  className="hover:scale-110 h-5 w-5 text-green"
                />
              </button>
              <button>
                <HiOutlineTrash
                  onClick={() => removeItem(item.id)}
                  className="clear-btn transition duration-300 hover:scale-110 h-5 w-5 text-red-500"
                />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
