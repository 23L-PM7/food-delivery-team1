import { BackgroundPic } from "../components/icons/backgroundPic";
import { Logo } from "../components/icons/Logo";
import { Facebook } from "../components/icons/Socials";
import { Instagram } from "../components/icons/Socials";
import { Twitter } from "../components/icons/Socials";
export function Footer() {
  return (
    <div className="">
      <div className="bg-green-500  w-full h-[545px]  relative">
        <div className="inset-0 absolute p-[120px] border-b">
          <div className="flex  justify-center items-center gap-2">
             <Logo/>
            <h1 className="text-white  font-medium">Food Delivery</h1>
          </div>
          <div className="flex mt-[40px] justify-around text-white hover:underline">
            <h1>Нүүр</h1>
            <h1>Холбоо барих</h1>
            <h1>Хоолны цэс</h1>
            <h1>Үйлчилгээний нөхцөл</h1>
            <h1>Хүргэлтийн бүс</h1>
            <h1>Нууцлалын бодлого</h1>
          </div>
          <div className="flex justify-center gap-5 mt-[40px] ">
            <a href="https://www.facebook.com/login/"><Facebook /></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><Instagram /></a>
            <a href="https://twitter.com/i/flow/login"><Twitter /></a>
          </div>
          <div className="border-b mt-[40px]"></div>
          <div className="mt-[40px] flex flex-col items-center text-white">
            <h1>© 2024 Pinecone Foods LLC</h1>
            <h1>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
          </div>
          
        </div>
        <BackgroundPic />
      </div>
    </div>
  );
}
