import { Book, Clock, Food } from "../icons/HeroCard";


const buttonMain =
  [
    {
      title: "Хүргэлтийн төлөв хянах",
      icon: <Book />,
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      title: "Шуурхай хүргэлт",
      icon: <Clock />,
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      title: "Эрүүл, баталгаат орц",
      icon: <Food />,
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      title: "Хоолны өргөн сонголт",
      icon: <Book />,
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ]



export function Mainbutton() {

  return (
    <div className="container mx-auto  flex gap-[47px] max-w-[1200px] mt-[122px] mb-[122px]">
      {buttonMain.map((item) => (
        <div className="no-animation cursor-pointer hover:bg-white drop-shadow-xl w-3/12 h-[155px] bg-white rounded-xl p-[16px]">
          <div>
            <div className="p-[15px] w-[60px] h-[60px]">
              <div>{item.icon}</div>
            </div>
            <div className="flex flex-col gap-[4px] h-[48px]">
              <div className="font-bold text-[18px] ">{item.title}</div>
              <div className="text-[14px] font-normal text-gray-600">{item.description}</div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
