import { BackgroundPic } from "../components/icons/backgroundPic";

export function Desktop() {
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
                {" "}
                Pinecone Food Delivery
              </h1>
              <h1 className="font-serif text-white text-[22px]">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
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
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
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
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
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
