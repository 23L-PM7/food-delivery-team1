import Order from "@/components/details";
import { Footer } from "../Footer";
import { Category } from "@/components/category";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div>
          <Header />
      <Category />
<Order/>  
 <Footer />
    </div>
  );
}
