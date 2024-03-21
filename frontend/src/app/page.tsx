
import { Footer } from "./Footer";
import Header from "./components/Header";
import { Category } from "./components/category";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Category />
      <Footer />
    </div>
  );
}
