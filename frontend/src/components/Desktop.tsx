import { BackgroundPic } from "../components/icons/backgroundPic";
import { Logo } from "../components/icons/Logo";

export function Desktop() {
  return (
    <div className="bg-green-500  w-full h-[788px] relative">
      <BackgroundPic />
      <div className="inset-0 absolute p-[120px] flex justify-between">
        <div className="w-[384px] h-[224.7px] mt-[176px] mr-[120px]">
          <h1 className="text-white font-semibold text-[55px] border-b">
            {" "}
            Pinecone Food Delivery
          </h1>
          <h1 className="font-serif text-white text-[22px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>

        <div className="w-[588px] h-[438px] ">
          <img
            className="object-cover"
            src="images/HeroPic.png"
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
}
