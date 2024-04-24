type FoodCardProps = {
    id: number;
    img: string;
    name: string;
    price: number;
    saleprice?: number;
  };

export const SellChip =(props: FoodCardProps) => {
    const { id, img, name, price, saleprice } = props;
    return (
        <button className="bg-green-500 rounded-full py-[4px] px-[16px] text-white border border-white">20%</button>
    );
}