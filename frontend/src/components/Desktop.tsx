import { useRouter } from "next/navigation";
import { BackgroundPic } from "../components/icons/backgroundPic";

export function Desktop() {
  const router = useRouter();
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="bg-green-500  w-full h-[600px] relative">
          <div className="object-cover h-[600px] w-full">
            <BackgroundPic />
          </div>
          <div className=" container mx-auto inset-0 absolute py-[120px] flex justify-between gap-[228px] max-w-[1200px]">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="bg-green-500  w-full h-[600px] relative">
          <img
            className="h-[600px] w-full object-cover"
            src="https://res.cloudinary.com/datkkanof/image/upload/v1714122491/lz5ds7ogv5fzjfog1dvl.jpg"
          />
          <div className=" container mx-auto inset-0 absolute py-[120px] flex justify-between gap-[228px] max-w-[1200px]">
            <div className="w-[384px] h-[224.7px] mt-[176px] mr-[120px]">
              <h1 className="text-white font-semibold text-[55px] border-b">
                {""}
                Үхрийн Мах
              </h1>
              <h1 className="font-serif text-white text-[22px]">
                Ердөө 12'000 төгрөг
              </h1>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          onClick={() => {
            router.push("/deliveryzone");
          }}
          className="bg-green-500  w-full h-[600px] relative"
        >
          <img
            className="h-[600px] w-full object-cover"
            src="https://img.freepik.com/free-photo/male-courier-mask-holding-coffee-yellow_179666-38415.jpg?w=1800&t=st=1714127690~exp=1714128290~hmac=8d9d655e93021f9f004cc600a17a501eb30ecbd4bd8c8f092ed9b32d120b5362"
          />
          <div className=" container mx-auto inset-0 absolute py-[120px] flex justify-between gap-[228px] max-w-[1200px]">
            <div className="w-[384px] h-[224.7px] mt-[176px] mr-[120px]">
              <h1 className="text-white font-semibold text-[55px] border-b">
                {""}
                Pinecone Food Delivery
              </h1>
              <h1 className="font-serif text-white text-[22px]">
                Хүргэлтийн бүс харах боломжтой
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          onClick={() => {
            router.push("https://www.instagram.com/boredurus/");
          }}
          className="bg-green-500  w-full h-[600px] relative"
        >
          <img
            className="h-[600px] w-full object-cover"
            src="https://www.touchbistro.com/wp-content/uploads/2022/03/hire-a-chef-for-your-restaurant-inset-1.jpg"
          />
          <div className=" container mx-auto inset-0 absolute py-[120px] flex justify-between gap-[228px] max-w-[1200px]">
            <div className="w-[384px] h-[224.7px] mt-[176px] mr-[120px]">
              <h1 className="text-white font-semibold text-[55px] border-b">
                {""}
                Pinecone Food Delivery
              </h1>
              <h1 className="font-serif text-white text-[22px]">
                Тогооч ажилд авна @boredurus
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
