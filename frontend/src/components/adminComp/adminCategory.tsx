"use client";
import { useEffect, useState } from "react";
import { GreyAdd, GreenPlus } from "../icons/tripledot";
import { SideCategory } from "./adminCategorySelect";
import axios from "axios";
import { Containers } from "@/app/foods/Containers";
import { FoodCard } from "@/app/foods/FoodCard";
import { Food } from "@/app/foods/FoodsCardModal";

export function AdminCategory() {
  const [openCreate, setOpenCreate] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);

  const fetchFoods = async () => {
    await axios.get("http://localhost:9090/foods").then((response) => {
      setFoods(response.data);
    });
  };

  const openCreateModal = () => {
    setOpenCreate(!openCreate);
    setName("");
  };

  const fetchCategory = async () => {
    await axios.get("http://localhost:9090/category").then((response) => {
      setCategory(response.data);
    });
  };

  const openTheModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    fetchCategory();
    fetchFoods();
  }, []);

  const createCategory = async () => {
    console.log(name);

    if (name == "" || name == null) {
      return;
    } else {
      await axios
        .post("http://localhost:9090/category/create", {
          name,
        })
        .then(() => {
          setName("");
          setOpenCreate(!openCreate);
          fetchCategory();
        });
    }
  };

  const clearField = () => {
    setName("");
    console.log({ category });
  };

  return (
    <div className="">
      <div className="w-full container flex mx-auto">
        {/* categories */}
        <div className="w-[30%] h-screen flex flex-col items-center gap-y-5 pl-1 bg-white pt-4 border rounded-xl">
          {/* Food Menu */}
          <div className="w-[258px]">
            <h2 className="text-xl font-bold">Food Menu</h2>
          </div>
          {/* category mapped */}
          <div className="w-[258px] flex flex-col gap-y-5">
            {category.map((item: any, index: any) => (
              <SideCategory
                key={100 - index}
                zindex={100 - index}
                label={item.name}
                id={item._id}
                fetchCat={() => fetchCategory()}
              />
            ))}
            <button onClick={openCreateModal}>
              <div className="btn btn-sm bg-white h-[40px] flex">
                <GreyAdd />
                <h1 className="text-gray-500">Create new Category</h1>
              </div>
            </button>
          </div>
        </div>
        {/* second half */}
        <div className="h-full w-full">
          {/* title with button */}
          <div className="flex justify-between h-[67px] items-center pl-5">
            <h2 className="text-xl font-bold">Breakfast</h2>

            <button
              className="btn btn-sm bg-green-500 text-white hover:bg-green-400 h-[35px]"
              onClick={openTheModal}
            >
              Add new food
            </button>
          </div>
          {/* food content */}
          <div className="w-full h-full flex flex-col items-center pt-[50px] gap-5">
            {/* <GreenPlus />
            <h1 className="text-gray-400">
              Уучлаарай, Таны меню хоосон байна.
            </h1> */}
            <div
              className="grid grid-rows-12 grid-cols-1 sm:grid-rows-6 sm-grid-cols-2 md:grid-rows-6 md:grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 xl:grid-rows-3 xl:grid-cols-4 2xl:grid-rows-3 2xl:grid-cols-4 2xl:gap-x-[24px] 2xl:gap-y-[60px] container mx-auto 2xl:max-w-[1200px]"
              id="my_modal_2"
            >
              {foods.map((food: any) => (
                <FoodCard food={food} key={food._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* modal for creation */}
      <dialog
        id="create_category"
        className={`modal ${openCreate ? "modal-open" : ""}`}
      >
        <div className="modal-box p-0">
          <div className="flex w-full justify-between items-center p-4 border-b-[1px]">
            <h1 className="text-2xl font-semibold">Create New Category</h1>

            <h1 className="text-xl font-bold text-white">x</h1>
          </div>
          <div className="flex flex-col p-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category Name</span>
              </div>
              <input
                type="text"
                value={name}
                placeholder="Category Name"
                className="input input-bordered w-full bg-gray-200"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end p-4 gap-3">
            <button
              onClick={clearField}
              className="btn btn-sm h-[40px] btn-outline"
            >
              Clear
            </button>
            <button
              onClick={createCategory}
              className="btn btn-sm h-[40px] btn-neutral text-white"
            >
              Create
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={openCreateModal}>close</button>
        </form>
      </dialog>
      <dialog
        id="my_modal_3"
        className={modalState ? `modal modal-open` : `modal`}
      >
        <Containers
          fetchFoods={() => fetchFoods()}
          openTheModal={() => openTheModal()}
        />
      </dialog>
    </div>
  );
}

// type Foods = {
//   id: string;
//   name: String;
//   image: String;
//   ingredient: String;
//   price: Number;
//   saleprice: Number;
//   foodcategory: String;
// };

// const FoodsPage = () => {
//   const [foods, setFoods] = useState<Foods[]>([]);

//   const getFoods = async () => {
//     const response = [];
//     setFoods(response);
//   };

//   useEffect(() => {
//     getFoods();
//   });

//   return (
//     <>
//       {foods.map((food) => {
//         return (
//           <FoodCard
//             key={food._id}
//             _id={food._id}
//             name={food.name}
//             price={food.price}
//             img={food.img}
//           />
//         );
//       })}
//     </>
//   );
// };

// const FoodCard = (props: Foods) => {
//   const { name, price, img } = props;

//   const showModal = () => {};

//   return (
//     <div onClick={showModal}>
//       <div>
//         <p>{name}</p>
//         <p>{price}</p>
//         <p>{img}</p>
//       </div>
//       <FoodCardModal {...props} />
//     </div>
//   );
// };

// const FoodCardModal = (props: Foods) => {
//   const { name, price, img } = props;
//   return (
//     <>
//       <p>{name}</p>
//       <p>{price}</p>
//       <p>{img}</p>
//     </>
//   );
// };
