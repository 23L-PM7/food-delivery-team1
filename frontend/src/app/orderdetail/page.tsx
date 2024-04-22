import Order from "@/components/details";
import { Footer } from "../../components/footer/Footer";
import { Category } from "@/components/category";
import Header from "@/components/Header";
import OrderCon from "@/components/orderconfirmation";


export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <Order />
      <Footer />
    </div>
  );
}
