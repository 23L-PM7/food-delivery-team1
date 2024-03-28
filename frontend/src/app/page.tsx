
import { Footer } from "./Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";
import { UserProfile } from "@/components/UserProfile";


export default function Home() {
  return (
    <div>
      <Header />
      <Desktop />
      <Mainbutton />
      <Menu />
      <UserProfile />
      <Footer />
    </div>
  );
}
