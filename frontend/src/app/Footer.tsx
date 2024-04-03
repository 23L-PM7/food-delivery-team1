import { BackgroundPic } from "../components/icons/backgroundPic";
import { Logo } from "../components/icons/Logo";
import { Facebook } from "../components/icons/Socials";
import { Instagram } from "../components/icons/Socials";
import { Twitter } from "../components/icons/Socials";
import { Terms } from "./termsofservice/terms";





export function Footer() {

  return (
    <div className="bg-green-500  w-full h-full relative">
      <BackgroundPic />
      <div className="p-[15px] sm:p-[20px] 2xl:p-[120px] inset-0 absolute pt-[30px] sm:pt[40px] 2xl:pt-[180px] border-b">
        <div className="flex  justify-center items-center gap-2">
          <Logo />
          <h1 className="text-white  font-medium">Food Delivery</h1>
        </div>
        <div className="mx-auto grid grid-rows-3 grid-cols-2 mt-[15px] justify-center place-content-center text-center 2xl:flex sm:mt-[20px] 2xl:mt-[40px] 2xl:justify-around text-white gap-[10px] sm:gap-[15px] 2xl:gap-[95px]">
          <a
            href="http://localhost:3000"
            className="text-[10px] 2xl:text-[16px] hover:underline"
          >
            Нүүр
          </a>
          <a className="text-[10px] 2xl:text-[16px] cursor-pointer hover:underline">
            Холбоо барих
          </a>
          <a
            className="text-[10px] 2xl:text-[16px] hover:underline"
            href="http://localhost:3000/menu"
          >
            Хоолны цэс
          </a>
          <a
            className="text-[10px] cursor-pointer 2xl:text-[16px] hover:underline"
            href="http://localhost:3000/termsofservice"
          >
            Үйлчилгээний нөхцөл
          </a>
          <a
            className="cursor-pointer text-[10px] 2xl:text-[16px] hover:underline"
            href="http://localhost:3000/deliveryzone"
          >
            Хүргэлтийн бүс
          </a>
          <a
            className=" cursor-pointer text-[10px] 2xl:text-[16px] hover:underline"
            href="http://localhost:3000/privacy"
          >
            Нууцлалын бодлого
          </a>
        </div>
        <div className="flex justify-center gap-1.5 sm:gap-2.5 2xl:gap-5 mt-[15px] 2xl:mt-[40px] ">
          <a
            className="scale-[50%] 2xl:scale-100"
            href="https://www.facebook.com/login/"
          >
            <Facebook />
          </a>
          <a
            className="scale-[50%] 2xl:scale-100"
            href="https://www.instagram.com/accounts/login/?hl=en"
          >
            <Instagram />
          </a>
          <a
            className="scale-[50%] 2xl:scale-100"
            href="https://twitter.com/i/flow/login"
          >
            <Twitter />
          </a>
        </div>
        <div className="border-b mt-[15px] 2xl:mt-[40px]"></div>
        <div className="mt-[15px] 2xl:mt-[40px] flex flex-col items-center text-white">
          <h1 className="text-[10px] 2xl:text-[16px]">
            © 2024 Pinecone Foods LLC
          </h1>
          <h1 className="text-[10px] 2xl:text-[16px]">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </h1>
        </div>
      </div>
    </div>
  );
}
