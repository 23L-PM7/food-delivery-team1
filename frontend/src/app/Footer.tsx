import { BackgroundPic } from "../components/icons/backgroundPic";
import { Logo } from "../components/icons/Logo";
import { Facebook } from "../components/icons/Socials";
import { Instagram } from "../components/icons/Socials";
import { Twitter } from "../components/icons/Socials";
import { Terms } from "./termsofservice/terms";
export function Footer() {
  return (
    <div className="bg-green-500  w-full  relative">
      <BackgroundPic />
      <div className="inset-0 absolute p-[120px] pt-[180px] border-b">
        <div className="flex  justify-center items-center gap-2">
          <Logo />
          <h1 className="text-white  font-medium">Food Delivery</h1>
        </div>
        <div className="flex mt-[40px] justify-around text-white hover:underline sm:gap-[96px]">
          <a href="http://localhost:3000">Нүүр</a>
          <a>Холбоо барих</a>
          <a href="http://localhost:3000/menu">Хоолны цэс</a>
          <a href="http://localhost:3000/termsofservice">Үйлчилгээний нөхцөл</a>
          <a href="http://localhost:3000/deliveryzone">Хүргэлтийн бүс</a>
          <a >Нууцлалын бодлого</a>
        </div>
        <div className="flex justify-center gap-5 mt-[40px] ">
          <a href="https://www.facebook.com/login/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en">
            <Instagram />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <Twitter />
          </a>
        </div>
        <div className="border-b mt-[40px]"></div>
        <div className="mt-[40px] flex flex-col items-center text-white">
          <h1>© 2024 Pinecone Foods LLC</h1>
          <h1>Зохиогчийн эрх хуулиар хамгаалагдсан.</h1>
        </div>
      </div>
    </div>
  );
}
