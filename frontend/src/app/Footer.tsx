import { BackgroundPic } from "./components/icons/backgroundPic";
import { Logo } from "./components/icons/Logo";
import { Facebook } from "./components/icons/Socials";
import { Instagram } from "./components/icons/Socials";
import { Twitter } from "./components/icons/Socials";
export function Footer() {
  return (
    <div className="container mx-auto">
      <div className="bg-green-500  w-[1440px] h-[545px]  relative">
        <div className="inset-0 absolute p-[120px] border-b">
            <div className="flex  justify-center">
            <Logo/>
            </div>
            <div className="flex mt-[40px] justify-around text-white hover:underline">
          <h1>Нүүр</h1>
          <h1>Холбоо барих</h1>
          <h1>Хоолны цэс</h1>
          <h1>Үйлчилгээний нөхцөл</h1>
          <h1>Хүргэлтийн бүс</h1>
          <h1>Нууцлалын бодлого</h1>
          </div>
          <div className="flex justify-center gap-5 mt-[40px] border-b">
          <Facebook/>
          <Instagram/>
          <Twitter/>
          </div>
          
        </div>
        <BackgroundPic />
      </div>
    </div>
  );
}
