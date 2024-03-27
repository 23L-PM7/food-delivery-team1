export function AdminGreyhead() {
  return (
    <div className="w-full bg-gray-100 h-[44px] flex items-center justify-evenly drop-shadow-md">
      <div className="h-full w-[21%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600">Order Name</h3>
      </div>
      <div className="h-full w-[15%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600">Buyer Info</h3>
      </div>
      <div className="h-full w-[23%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600">Payment</h3>
      </div>
      <div className="h-full w-[21%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600">Address</h3>
      </div>
      <div className="h-full w-[14%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600">Delivery State</h3>
      </div>
      <div className="h-full w-[6%] flex items-center pl-3">
        <h3 className="text-xs text-slate-600"></h3>
      </div>
    </div>
  );
}
