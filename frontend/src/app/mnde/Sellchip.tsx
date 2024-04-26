type FoodCardProps = {
  price: number;
  saleprice?: number;
};

export const SellChip = (prop: FoodCardProps) => {
  const { price, saleprice } = prop;

  return (
    <button className="bg-green-500 rounded-full py-[4px] px-[16px] text-white border border-white">
      {typeof saleprice === "number"
        ? `${Math.floor(100 - (saleprice / price) * 100)}%`
        : "0%"}
    </button>
  );
};
