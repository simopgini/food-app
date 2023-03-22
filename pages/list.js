import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ItemList from "@/components/ItemList";
import Alert from "@/components/Alert";

// const getLocalStorage = () => {
//     let listStorage = localStorage.getItem("list")
//     if (listStorage){
//         return JSON.parse(localStorage.getItem("list"))
//     }
//     else {
//         return []
//     }
// }

import { HiOutlineChevronLeft } from "react-icons/hi";

const List = () => {

  const [name, setName] = useState("");
  // const [list, setList] = useState(getLocalStorage());
  const [list, setList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "Value changed");
    } else {
      // show alert
      showAlert(true, "success", "Ingredient added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        count: 0,
      };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "Empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // useEffect(() => {
  //     localStorage.setItem("list", JSON.stringify(list))
  // }, [list])

  // function handleChange(event) {
  //      setName(event.target.value);
  //  }

  //  function handleAdd() {
  //     const newList = list.concat({ name });

  //      setList(newList);
  //  }

  return (
    <>
      <div className="h-screen mb-8">
        <div>
          <div className="px-4 mb-6 mt-16 flex justify-between items-center">
            <Link
              href="/"
              className="hover:scale-105 bg-white rounded-lg p-1 shadow-md"
            >
              <HiOutlineChevronLeft className="hover:animate-pulse h-6 w-6" />
            </Link>
            <div className="flex-1 bg-white"></div>
            <div className="flex-auto p-1 font-bold text-xl">LIST</div>
          </div>
        </div>

        <div className="px-4 mb-8">
          <h2 className="font-bold text-xl text-[#0A2533]">
            My ingredients list:
          </h2>
        </div>

        {/* Type grocery item section mt-36*/}
        <div className="section-center">
          <div className=" mb-4 items-center">
            <form className="px-4 grocery-form" onSubmit={handleSubmit}>
              <div className="flex form-control">
                <input
                  className="flex-1 placeholder:text-sm placeholder:text-gray block  bg-gray-light w-full  rounded-lg py-2 pr-3 shadow-md focus:outline-none 
                                    focus:border-green focus:ring-green focus:ring-1 sm:text-sm"
                  style={{ borderWidth: 0 }}
                  placeholder="e.g. avocado"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="submit"
                  className="submit-btn drop-shadow-lg drop-shadow-white hover:shadow-[#A4D3C5] hover:bg-[#55a78e] duration-500 hover:scale-105 ml-3 px-4 py-2 bg-green text-sm text-white rounded-lg"
                >
                  {isEditing ? "Edit" : "Add"}
                </button>
              </div>
            </form>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
          </div>
          {list.length > 0 && (
            <section className="px-4 grocery-container">
              <ItemList
                items={list}
                removeItem={removeItem}
                editItem={editItem}
              />
              <div className="flex my-4 justify-center">
                <button
                  className="text-red-500 hover:text-red-700 transition ease-out border border-red-500 hover:border-red-700 hover:bg-red-200 px-2 py-1 rounded-lg"
                  onClick={clearList}
                >
                  Clear Items
                </button>
              </div>
            </section>
          )}
        </div>


      </div>
    </>
  );
};

export default List;
