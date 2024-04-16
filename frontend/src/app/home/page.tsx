import Header from "@/components/Header";
import { Footer } from "../Footer";
import { Category } from "@/components/category";

export default function Home() {
  return (
    <div className="h-dvh">
      <Header />
      <Category />
      <Footer />
    </div>
  );
}
