import { useEffect, ReactNode, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { toast } from "sonner";

type Props = {
  deleteModal: () => void;
  food: any;
};

export const FoodsCardModal = (props: Props) => {
  const { deleteModal, food } = props;
  const [name, setFoodName] = useState(food.name);
  const [ingredient, setIngredient] = useState(food.ingredient);
  const [price, setPrice] = useState<number>(food.price);
  const [category, setCategory] = useState([]);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState<any>();
  const [saleprice, setSalePrice] = useState(food.saleprice);

  const fetchCategory = async () => {
    await axios.get("http://localhost:9090/category").then((response) => {
      setCategory(response.data);
    });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const options = category.map((category: any) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  useEffect(() => {
    if (category.length) {
      const initialOption = options.find(
        (one: any) => one.value === food.categoryId
      );
      setSelectedCategoryOption(initialOption);
    }
  }, [category]);

  const updateFoods = async (id: string) => {
    const categoryId: string = selectedCategoryOption.value;
    console.log({ name, categoryId, ingredient, price, saleprice, id });
    const userId = "66224b6f98e6eb965ffc9027";
    if (
      name == "" ||
      name == null ||
      categoryId == "" ||
      categoryId == null ||
      ingredient == "" ||
      ingredient == null ||
      price == null ||
      saleprice == null
    ) {
    } else {
      await axios
        .put(`http://localhost:9090/foods/update/${id}`, {
          name,
          ingredient,
          price,
          saleprice,
          categoryId,
          userId,
        })
        .then(() => {
          setFoodName("");
          setIngredient("");
          setPrice("");
          setSalePrice("");
          setSelectedCategoryOption("");
        });
    }
  };

  return (
    <div className=" flex w-[981px] h-[564px] container mx-auto p-[32px] gap-[33px] bg-white rounded-2xl relative">
      <div>
        <img
          className="object-cover w-[500px] h-[500px]"
          src="https://media.istockphoto.com/id/1690090007/photo/a-cropped-image-of-a-womans-hand-holding-a-piece-of-toasted-bread-with-scrambled-eggs-on-top.jpg?s=2048x2048&w=is&k=20&c=KYa9toFXQyJ_pWcikPGQ6qxHl127RRM7txLFfDv5SMM="
        />
        {food.image}
      </div>

      <div className="flex flex-col gap-[32px] justify-center">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 "
            onClick={() => deleteModal()}
          >
            X
          </button>
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 ">
            X
          </button> */}
        </form>
        <div className="flex flex-col gap-[2px] w-[384px]">
          <div className="font-semibold  text-[#000000] text-xl">
            <input
              type="text"
              className="input w-full max-w-xs input-bordered"
              value={name}
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            <input
              type="number"
              className="input w-full max-w-xs input-bordered"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            <input
              type="number"
              className="input w-full max-w-xs input-bordered"
              value={saleprice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <div className="font-semibold text-lg text-[#000000]">Орц</div>

          <div className="bg-[#F6F6F6] p-[8px] rounded-[8px] text-[#767676]">
            <input
              type="text"
              className="input w-full max-w-xs input-bordered"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </div>
        </div>
        <div className="font-semibold text-lg text-[#000000] block">
          Хоолны ангилал
          <h1 className="font-semibold text-lg text-[#18ba51] mt-[2px]">
            <Select
              instanceId="1234567" //eniig ustgaj bolku ju :,)
              options={options}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "black",
                  backgroundColor: "rgb(229 231 235)",
                  height: "45px",
                }),
              }}
              value={selectedCategoryOption}
              onChange={(value) => setSelectedCategoryOption(value)}
            />
          </h1>
        </div>
        <div>
          <button
            onClick={() => updateFoods(food._id)}
            className="btn w-[109px] h-[40px] bg-zinc-700 text-white"
          >
            Continue
          </button>
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
    </div>
  );
};
