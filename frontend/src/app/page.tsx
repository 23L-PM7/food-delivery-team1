import { Footer } from "./Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/herobutton/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";

export default function Home() {
  return (
    <div>
      <Header />
      <Desktop />
      <Mainbutton />

      <Nogoonplus />
      <Menu />
      <Footer />
    </div>
  );
}
