const childs = [
  {
    item: 1,
    id: "1238123",
  },
  {
    item: 2,
    id: "1238123",
  },
];

const Parent = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleSelectItem = (item: number) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {childs.map((child) => {
        return (
          <Child
            key={child.id}
            isSelected={child.item === selectedItem}
            onClick={() => handleSelectItem(child.item)}
          />
        );
      })}
    </div>
  );
};

type ChildProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Child = (props: ChildProps) => {
  const { isSelected, onClick } = props;

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: isSelected ? "red" : "blue",
      }}
    >
      child
    </div>
  );
};
