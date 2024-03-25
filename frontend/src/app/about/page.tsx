import Header from "@/components/Header";
import { Category } from "@/components/category";
import { Footer } from "../Footer";
import {Mainbutton} from "@/components/Mainbutton"

export default function FoodMenu() {
  return (
    <div>
      <Header />
      <Mainbutton />
      <Category />
      <Footer />
    </div>
  );
}
