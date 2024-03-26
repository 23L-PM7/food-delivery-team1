export function AdminDashboard() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center p-20 gap-y-5">
      <div className="w-[1024px] h-[624px] bg-white rounded-3xl drop-shadow-sm">
        {/* title with search bar */}
        <div className="flex w-full justify-between p-5 items-center">
          <h1 className="font-bold text-xl">Admin Dashboard</h1>
          <label className="input input-bordered flex items-center gap-2 w-[356px] h-[36px] bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>
        {/* table of contents titles */}
        <div className="w-full bg-gray-100 h-[44px] flex items-center justify-evenly drop-shadow-md">
          <div className="h-full w-[21%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600">Order Name</h3>
          </div>
          <div className="h-full w-[15%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600">Buyer Info</h3>
          </div>
          <div className="h-full w-[21%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600">Payment</h3>
          </div>
          <div className="h-full w-[21%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600">Address</h3>
          </div>
          <div className="h-full w-[14%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600">Delivery State</h3>
          </div>
          <div className="h-full w-[8%] flex items-center pl-5">
            <h3 className="text-xs text-slate-600"></h3>
          </div>
        </div>
        {/* contents mapped */}
        <div className=""></div>
      </div>
      {/* page selector with numbers */}
      <div className="w-[1024px] h-[60px] flex justify-between items-end pt-5 border-t-[1px]">
        <button className="btn btn-sm bg-white h-[36px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6666 9.16634H6.52498L11.1833 4.50801L9.99998 3.33301L3.33331 9.99967L9.99998 16.6663L11.175 15.4913L6.52498 10.833H16.6666V9.16634Z"
              fill="#121316"
            />
          </svg>
          Previous
        </button>

        <div className="join">
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">4</button>
        </div>

        <button className="btn btn-sm bg-white h-[36px]">
          Next
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.33301L8.82504 4.50801L13.475 9.16634H3.33337V10.833H13.475L8.82504 15.4913L10 16.6663L16.6667 9.99967L10 3.33301Z"
              fill="#121316"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
