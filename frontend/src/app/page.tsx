import { Footer } from "./Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/herobutton/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";
import { UserProfile } from "@/components/userprofile/UserProfile";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Desktop />
      <Mainbutton />
      <Menu />
      <Footer />
    </div>
  );
}
