function OrderCon() {
  return (
    <div className="flex justify-center">
      <main className=" block rounded-xl">
        <div className="flex gap-2">
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
          className="w-[432px] h-[612px] block border-2
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
        <div className="flex gap-2">
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
        <main className="w-[432px] h-[612px]  border-2"></main>
      </main>
    </div>
  );
}

export default OrderCon;
