type FoodCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  saleprice?: number;
};

export const SellChip = (props: FoodCardProps) => {
  const { id, image, name, price, saleprice } = props;

  return (
    <button className="bg-green-500 rounded-full py-[4px] px-[16px] text-white border border-white">
      {typeof saleprice === "number"
        ? `${Math.floor(100 - (saleprice / price) * 100)}%`
        : "0%"}
    </button>
  );
};
