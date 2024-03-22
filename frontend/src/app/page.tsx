import { Footer } from "./Footer";
import Header from "../components/Header";
import { Category } from "../components/category";

export default function Home() {
  return (
    <div>
       <Header />
      <div className="container mx-auto">
        <Category />
      </div>
      <Footer />
    </div>
  );
}
