import { Footer } from "./Footer";
import Header from "../components/Header";
import { Category } from "../components/category";
import { Login } from "@/components/Login";

export default function Home() {
  return (
    <div>
       <Header />
       <Login/>
      <Footer />
    </div>
  );
}
