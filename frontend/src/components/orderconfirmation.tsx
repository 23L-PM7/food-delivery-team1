import { Span } from "next/dist/trace";

function OrderCon() {
  return (
    <div className="flex justify-center mb-12 gap-24">
      <main className=" block rounded-xl">
        <div className="flex gap-2 px-4 py-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
            <circle cx="24" cy="24" r="12" fill="#0468C8" />
          </svg>
          <div className="block">
            <h5>Алхам 1</h5>
            <h1>Захиалга баталгаажуулах</h1>
            <h5>Хүлээгдэж байна</h5>
          </div>
        </div>
        <main
          className="w-[432px] h-[612px] block border-2 gap-4 p-6
        "
        >
          Хаяг аа оруулна уу
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Дүүрэг сонгоно уу
            </option>
            <option>Баянзүрх дүүрэг</option>
            <option>Хан-Уул дүүрэг</option>
            <option>Баянгол дүүрэг</option>
            <option>Сонгинохайрхан дүүрэг</option>
            <option>Чингэлтэй дүүрэг</option>
          </select>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Хороо сонгоно уу
            </option>
            <option>1-р хороо</option>
            <option>2-р хорооue</option>
            <option>3-р хороо</option>
            <option>4-р хороо</option>
            <option>5-р хороо</option>
            <option>5-р хороо</option>
            <option>7-р хороо</option>
          </select>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Байр, гудамж сонгоно уу
            </option>

            <option>Нархан хотхон</option>
            <option>26-р байр</option>
            <option>Хоймор хотхон</option>
            <option>45-р байр</option>
            <option>Зайсан хотхон </option>
          </select>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Нэмэлт мэдээлэл</span>
              <span className="label-text-alt"></span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Орц, давхар, орцны код ..."
            ></textarea>
            <div className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Утасны дугаар*</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              type="text"
              placeholder="Утасны дугаараа оруулна уу"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </div>
          </label>
          <p>Төлбөр төлөх</p>
          <div className="flex">
            {" "}
            <div className="block">
              <span>
                {" "}
                <input type="checkbox" id="myCheck" />
              </span>
              <span className="label-text">Бэлнээр </span>
            </div>{" "}
            <div className="block">
              <span>
                {" "}
                <input type="checkbox" id="myCheck" />
              </span>
              <span className="label-text ">Картаар</span>
            </div>
          </div>
        </main>
      </main>
      <main className="block rounded-xl">
        <div className="flex gap-2 px-4 py-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
            <circle cx="24" cy="24" r="12" fill="#0468C8" />
          </svg>
          <div className="block">
            <h5>Алхам 1</h5>
            <h1>Хаягийн мэдээлэл оруулах</h1>
            <h5>Хүлээгдэж байна</h5>
          </div>
        </div>
        <main className="w-[432px] h-[612px]  border-2 p-6">
          <div className="flex gap-2 ">
            <img
              src="/images/Image.png"
              className="w-[184px] h-[121px] object-cover"
            />

            <div>
              <h1 className="font-semibold text-lg">Main Pizza </h1>
              <h2
                className="font-semibold text-lg text-green-600 mb-2
            "
              >
                34,800₮
              </h2>
              <h4 className="text-neutral-500">
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
              </h4>{" "}
            </div>
          </div>
          <main className="flex gap-3 w-[384px] h-[54px] mt-[369px] justify-center">
            <span>
              <h1>Нийт төлөх дүн</h1>
              <h1 className="font-bold">34,800₮</h1>
            </span>
            <span className="px-2 py-3 w-[187px] h-[47px] bg-[#EEEFF2] text-center">
              Захиалах
            </span>{" "}
          </main>
        </main>
      </main>
    </div>
  );
}

export default OrderCon;
