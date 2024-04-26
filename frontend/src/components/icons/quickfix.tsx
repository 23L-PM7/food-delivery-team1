import { utilDeleter } from "@/util/mainUtility";
import { ActualCircleBlue } from "./actualCircleBlue";

type ChildProps = {
  item: any;
};

export function QuickCircle(props: ChildProps) {
  const { item } = props;
  const lastFiveDigits = item.adminId.slice(-5);

  const date = new Date(item.createdDate);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based months
  const day = ("0" + date.getDate()).slice(-2);
  const parsedDate = `${year}/${month}/${day}`;

  const deleteThisOrder = async (id: string) => {
    try {
      const data = await utilDeleter(`orders/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between border-b-[1px] pb-2 border-[#0468C8]">
      <div className="flex gap-4">
        <ActualCircleBlue />
        <div>
          <h1>Захиалга #{lastFiveDigits}</h1>
          <h2 className="text-[#0468C8] text-sm">Хүлээгдэж буй</h2>
        </div>
      </div>

      <div>
        <h1>{parsedDate}</h1>
        <button
          onClick={() => deleteThisOrder(item._id)}
          className="btn btn-sm btn-error max-h-none text-[12px] h-[10px]"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
