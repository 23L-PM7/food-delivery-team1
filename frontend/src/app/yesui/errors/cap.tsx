export function Cap() {
  return (
    <div className="absolute h-screen w-screen bg-gray-900/50 flex justify-center pt-[200px]">
      <div
        role="alert"
        className="alert w-[384px] h-[228px] bg-white border-none flex flex-col justify-center items-center"
      >
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="55" height="55" rx="27.5" fill="#FF624C" />
          <path
            d="M30.7227 27.625L35.6055 22.7422C36.2402 22.1562 36.2402 21.1797 35.6055 20.5938L34.5312 19.5195C33.9453 18.8848 32.9688 18.8848 32.3828 19.5195L27.5 24.4023L22.5684 19.5195C21.9824 18.8848 21.0059 18.8848 20.4199 19.5195L19.3457 20.5938C18.7109 21.1797 18.7109 22.1562 19.3457 22.7422L24.2285 27.625L19.3457 32.5566C18.7109 33.1426 18.7109 34.1191 19.3457 34.7051L20.4199 35.7793C21.0059 36.4141 21.9824 36.4141 22.5684 35.7793L27.5 30.8965L32.3828 35.7793C32.9688 36.4141 33.9453 36.4141 34.5312 35.7793L35.6055 34.7051C36.2402 34.1191 36.2402 33.1426 35.6055 32.5566L30.7227 27.625Z"
            fill="white"
          />
        </svg>
        <h1 className="font-bold text-center">
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </h1>
      </div>
    </div>
  );
}
