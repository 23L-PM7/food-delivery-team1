
import { Footer } from "./Footer";
import Header from "../components/Header";
import { Login } from "@/components/Login";
import { UserProfile } from "@/components/UserProfile";


export default function Home() {
  return (
    <div>
       <Header />
       <Login/>
       <UserProfile/>
      <Footer />
    </div>
  );
}
