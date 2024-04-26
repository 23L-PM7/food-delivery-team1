import Header from "@/components/Header";
import { Footer } from "../../components/footer/Footer";
import Menu from "../mnde/menu";

export default function Sale() {
  return (
    <div>
      <Header />
      <div className="flex justify-between container  my-[25px] mx-auto">
        <div className="font-bold text-2xl"> Хямдралтай</div>
        <div className="flex justify-center">
          <a
            href="/"
            className="text-sm font-normal lg:py-2 lg:px-3 rounded flex items-center text-green-600 hover:text-green-300"
          >
            Буцах
          </a>
          <a
            href="/menu"
            className="text-sm font-normal lg:py-2 lg:px-3 rounded flex items-center text-green-600 hover:text-green-300"
          >
            Бүгд
          </a>
        </div>
      </div>
      <Menu />
      <Footer />
    </div>
  );
}
