const CategoryList = [
  {
    id: 1,
    title: "Breakfast",
  },
  {
    id: 2,
    title: "Soup",
  },
  {
    id: 3,
    title: "Main Course",
  },
  {
    id: 4,
    title: "Dessert",
  },
]


export function Category() {
  return (
    <div className="max-w-[1200px] container mx-auto mt-[32px] mb-[86px]">
      <div className="w-full flex justify-between gap-x-[26px]">
        {CategoryList.map((item) => (
          <button className="btn w-[280px] h-[43px] outline-slate-200 text-black hover:bg-green-500 hover:text-white bg-transparent">
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
