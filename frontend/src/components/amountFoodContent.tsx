type ChildProps = {
  item: any;
};

export function RightSideContent(props: ChildProps) {
  const { item } = props;
  return (
    <div>
      <h1>{item.items.name}</h1>
    </div>
  );
}
