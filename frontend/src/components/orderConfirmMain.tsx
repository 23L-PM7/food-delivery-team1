type ChildProps = {
  item: any;
};

export function OrderMainTemplate(props: ChildProps) {
  const { item } = props;

  return (
    <div className="flex gap-2">
      <img
        src={item.image}
        className="w-[184px] h-[121px] rounded-2xl object-cover"
      />

      <div className="w-full flex flex-col relative">
        <h1 className="font-semibold text-lg m-0">{item.name}</h1>
        <h2 className="font-semibold text-lg text-green-600">{item.price}₮</h2>
        <h4 className="text-neutral-500 text-sm">{item.ingredient}</h4>
        <h1 className="absolute text-2xl font-black top-4 right-0">
          x{item.amount}
        </h1>
      </div>
    </div>
  );
}
