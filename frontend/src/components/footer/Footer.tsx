import { Logo } from "@/components/icons/Logo";
import { BackgroundPic } from "@/components/icons/backgroundPic";
import { SocialsLists, footerlists } from "./FooterLists";
import Link from "next/link";


export function Footer() {
  return (
    <div className="bg-green-500  w-full " >
      <div className="container mx-auto p-[15px] sm:p-[20px] md:p-[50px] lg:p-[75px] xl:p-[100px] 2xl:p-[120px]   pt-[30px] sm:pt[40px] md:pt-[100px] lg:pt-[125px] xl:pt-[150px] 2xl:pt-[180px] border-b">
        <div className="flex  justify-center items-center gap-2">
          <Logo />
          <h1 className="text-white  font-medium">Food Delivery</h1>
        </div>
        <div className="mx-auto grid grid-rows-3 grid-cols-2 mt-[15px] justify-center place-content-center text-center sm:flex sm:mt-[20px] md:mt-[30px] 2xl:mt-[40px] sm:justify-around text-white gap-[10px] sm:gap-[15px] md:gap-[30px] lg:gap-[50px] xl:gap-[75px] 2xl:gap-[95px]">
          {footerlists.map((footerlist) => (
            <Link
              key={footerlist.id}
              href={footerlist.link}
              className="text-[10px] md:text-[12px] 2xl:text-[16px] hover:underline"
            >
              {footerlist.tittle}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 sm:gap-2.5 2xl:gap-5 mt-[15px] 2xl:mt-[40px] ">
          {SocialsLists.map((SocialsList) => (
            <Link
              key={SocialsList.id}
              href={SocialsList.link}
              className="scale-[50%] 2xl:scale-100"
            >
              {SocialsList.icon}
            </Link>
          ))}
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
