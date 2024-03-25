import Header from "@/components/Header";
import Menu from "@/components/MainMenu";
import { Category } from "@/components/category";
import { Footer } from "../Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
       <Menu />
      <Footer />
    </div>
  );
}
