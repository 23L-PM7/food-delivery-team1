import { BackgroundPic } from "./components/icons/backgroundPic";
import { Logo } from "./components/icons/Logo";
export function Footer() {
  return (
    <div className="container mx-auto">
      <div className="bg-green-500  w-[1440px] h-[545px]  relative">
        <div className=" absolute p-[120px]">
            <div className="flex  justify-center">
            <Logo/>
            </div>
            <div className="flex">
          <h1>Нүүр</h1>
          <h1>Холбоо барих</h1>
          <h1>Хоолны цэс</h1>
          <h1>Үйлчилгээний нөхцөл</h1>
          <h1>Хүргэлтийн бүс</h1>
          <h1>Нууцлалын бодлого</h1>
          </div>
        </div>
        <BackgroundPic />
      </div>
    </div>
  );
}
