export function Mainbutton() {
  return (
    <div className="container mx-auto flex gap-[47px] max-w-[1200px] p-[16px] ">
      <div className="btn no-animation hover:bg-white drop-shadow-xl w-3/12 h-[155px] bg-white rounded-xl p-[16px] g-[15px]">
        <div>
          <div className="p-[15px] g-[10px]">
            <img src="./images/mainbutton/book.png" alt="" />
          </div>
          <div className="flex flex-col g-[4px] p-[4px]  ">
            <div className="font-bold flex ">Хүргэлтийн төлөв хянах</div>
            <div className="font-normal">Захиалга бэлтгэлийн явцыг хянах</div>
          </div>
        </div>
      </div>
      <div className="btn no-animation drop-shadow-xl hover:bg-white w-3/12 h-[155px] bg-white rounded-xl">
        <div>
          <div className="p-[15px] g-[10px]">
            <img src="./images/mainbutton/clock.png" alt="" />
          </div>
          <div className="flex flex-col  g-[4px]">
            <p className="font-bold flex"> Шуурхай хүргэлт</p>
            <p className="font-normal">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
      <div className="btn no-animation drop-shadow-xl hover:bg-white w-3/12 h-[155px] bg-white rounded-xl">
        <div>
          <div className="p-[15px] g-[10px]">
            <img src="./images/mainbutton/salad.png" alt="" />
          </div>
          <div className="flex flex-col  p-[4px]">
            <p className="font-bold flex">Эрүүл, баталгаат орц</p>
            <p className="font-normal">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
      <div className="btn no-animation drop-shadow-xl hover:bg-white w-3/12 h-[155px] bg-white rounded-xl">
        <div>
          <div className="p-[15px] g-[10px]">
            <img src="./images/mainbutton/book.png" alt="" />
          </div>
          <div className="flex flex-col  p-[4px]">
            <p className="font-bold flex p-1">Хоолны өргөн сонголт</p>
            <p className="font-normal">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
    </div>
  );
}
