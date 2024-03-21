
 
 export default function Header() {
    return (     
<nav className="bg-white border-gray-200 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.85857 9.5397L5.65344 17.4105C5.12868 18.3956 4.86572 19.4767 4.86572 20.5592C4.86572 21.6419 5.12868 22.7228 5.65344 23.7079L9.85857 31.5789C10.6336 33.0327 12.1494 33.9407 13.799 33.9407H18.2656V31.711H18.2641C17.4401 31.711 16.6822 31.2577 16.2946 30.5309L12.0911 22.6584C11.7398 22.0022 11.5647 21.2815 11.5647 20.5592C11.5647 19.8369 11.7398 19.1163 12.0911 18.4602L16.2946 10.5878C16.6822 9.86077 17.4401 9.40758 18.2641 9.40758H18.2656V7.17773H13.799C12.1494 7.17773 10.6336 8.08589 9.85857 9.5397Z" fill="black"/>
<path d="M35.3421 17.4106L31.1371 9.53976C30.3619 8.08579 28.8462 7.17779 27.1967 7.17779H22.7299V9.40747H22.7316C23.5556 9.40747 24.3135 9.86082 24.7009 10.5876L28.9044 18.4601C29.2559 19.1163 29.4307 19.837 29.4307 20.5593C29.4307 21.2816 29.2559 22.0022 28.9044 22.6585L24.7009 30.5307C24.3135 31.2577 23.5556 31.7109 22.7316 31.7109H22.7299V33.9408H27.1967C28.8462 33.9408 30.3619 33.0328 31.1371 31.5788L35.3421 23.708C35.8667 22.7229 36.1298 21.6418 36.1298 20.5593C36.1298 19.4767 35.8667 18.3957 35.3421 17.4106Z" fill="black"/>
</svg>
 <div className="items-center hidden w-full md:flex md:w-auto md:order-1" >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-start">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >НҮҮР</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ХООЛНЫ ЦЭС</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ХҮРГЭЛТИЙН БҮС</a>
        </li> </ul>
        <div>
        <input type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-[-5] " placeholder="Хайх"/>
        </div>
      </div>
  </div>
</nav>

    );
}
