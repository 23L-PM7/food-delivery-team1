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
    <div className="container mx-auto flex gap-[47px] max-w-[1200px] p-[16px] ">
      {buttonMain.map((item) => (
        <div className="btn no-animation hover:bg-white drop-shadow-xl w-3/12 h-[155px] bg-white rounded-xl p-[16px] g-[15px]">
          <div>
            <div className="p-[15px]">
              <div>{item.icon}</div>
            </div>
            <div className="flex flex-col g-[4px] p-[4px]">
              <div className="font-bold flex ">{item.title}</div>
              <div className="font-normal">{item.description}</div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
