import Image from "next/image";
import { useState, useEffect } from "react";
import ItemList from "@/components/list/ItemList";
import Alert from "@/components/list/Alert";
import AddIngredientForm from "@/components/list/AddIngredientForm";
import MobileHeaderList from "@/components/list/MobileHeaderList";

const List = () => {
  const [name, setName] = useState("");
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

  return (
    <>
      <div className="h-screen mb-8">
        <MobileHeaderList />

        <div className="px-4 md:px-8 lg:px-16 2xl:px-24 mb-8">
          <h2 className="font-bold text-xl text-[#0A2533]">
            My ingredients list:
          </h2>
        </div>

        {/* Type grocery item section mt-36*/}
        <div className="section-center">
          <div className="mb-8 items-center">
            <AddIngredientForm
              isEditing={isEditing}
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
            />

            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
          </div>

          {list.length === 0 && (
            <section className="flex flex-col justify-center">
              <div className="flex justify-center">
                <Image
                  className="hover:transition hover:duration-300 rounded-xl contrast-[1.1] saturate-[1.4]"
                  priority
                  src="/shopping-list.jpg"
                  alt="Shopping list"
                  sizes="100vw"
                  style={{
                    width: "70%",
                    height: "auto",
                  }}
                  width={500}
                  height={300}
                />
              </div>
              <p className="text-sm md:text-lg lg:text-xl xl:text-xl text-center px-4 md:px-8 lg:px-16 2xl:px-24 mb-6">
                Did you forget to create a shopping list? Type the ingredients
                you need to cook a delicious meal!
              </p>
            </section>
          )}
          {list.length > 0 && (
            <section className="px-4 md:px-8 lg:px-16 2xl:px-24 grocery-container">
              <ItemList
                items={list}
                removeItem={removeItem}
                editItem={editItem}
              />
              <div className="flex my-4 justify-center">
                <button
                  className="lg:text-base text-red-500 hover:text-red-700 transition ease-out border border-red-500 hover:border-red-700 hover:bg-red-200 px-2 py-1 rounded-lg"
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
