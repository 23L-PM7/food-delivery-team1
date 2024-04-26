type ChildProps = {
  item: any;
};

export function RightSideContent(props: ChildProps) {
  const { item } = props;
  return (
    <div className="flex flex-col justify-center">
      {item.items.map((item: any) => (
        <div className="h-[55px] flex justify-between items-center border-b-[1px] px-5">
          <h1 className="font-thin">{item.name}</h1>
          <div className="h-[40px] w-[40px] flex justify-center items-center">
            <h1 className="font-thin">{`(${item.amount})`}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
