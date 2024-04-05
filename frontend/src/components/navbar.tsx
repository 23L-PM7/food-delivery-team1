const array = [
  {
    title: "НҮҮР",
    href: "http://localhost:3000",
  },
  {
    title: "ХООЛНЫ ЦЭС",
    href: "http://localhost:3000/menu",
  },
  {
    title: "ХҮРГЭЛТИЙН БҮС",
    href: "http://localhost:3000/deliveryzone",
  },
];

export const Navbar = () => {
  return (
    <div className=" hidden lg:flex ">
      {array.map((item) => (
        <ul>
          <li>
            <a
              href={item.href}
              className="lg:py-2 lg:px-3 rounded  hover:text-green-600"
            >
              {item.title}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};
