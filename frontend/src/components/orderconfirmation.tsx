import { Span } from "next/dist/trace";

function OrderCon() {
  return (
    <div className="flex justify-center">
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
              Pick the best JS framework
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick the best JS framework
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick the best JS framework
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Your bio</span>
              <span className="label-text-alt"></span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
            <div className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt"></span>
            </div>
          </label>
          <div className="flex">
            {" "}
            <div className="block">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">What is your name?</span>
            </div>{" "}
            <div className="block">
              <span>
                {" "}
                <input type="checkbox" id="myCheck" />
              </span>
              <span className="label-text ">What is your name?</span>
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
        <main className="w-[432px] h-[612px]  border-2 ">
          <div className="flex gap-2 p-6">
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
          <main className="flex gap-3 w-[384px] h-[54px]">
            <span>
              <h1>Нийт төлөх дүн</h1>
              <h1>34,800₮</h1>
            </span>
            <span className="px-2 py-3 w-[187px] h-[47px] bg-[#EEEFF2]">
              Захиалах
            </span>{" "}
          </main>
        </main>
      </main>
    </div>
  );
}

export default OrderCon;
