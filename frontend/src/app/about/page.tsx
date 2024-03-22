import Header from "@/components/Header";
import { Category } from "@/components/category";
import { Footer } from "../Footer";
import { Map } from "@/components/footerInfo";

export default function FoodMenu() {
  return (
    <div>
      <Header />
      <Category />
      <Footer />
      <Map />
    </div>
  );
}
