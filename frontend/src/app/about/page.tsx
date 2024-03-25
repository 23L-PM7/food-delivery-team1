import Header from "@/components/Header";
import { Category } from "@/components/category";
import { Footer } from "../Footer";
import Menu from "../mnde/menu";

export default function FoodMenu() {
  return (
    <div>
      <Header />
      <Category />
      <Menu />
      <Footer />
    </div>
  );
}
