import Signup from "@/app/signup/Signup";
import { Forgot } from "@/app/forgotpass/forgotpass";
import { PopupSignin } from "@/components/popupSignin";
import { Confirmation } from "@/app/forgotpass/sentConfirmation";
import { NewPassword } from "@/app/forgotpass/newpassword";
import { PassSetAlert } from "@/app/forgotpass/passwordAlert";
import { AdminDashboard } from "@/components/adminComp/adminDashboard";
import Header from "@/components/Header";
import { Footer } from "../Footer";
import { AdminCategory } from "@/components/adminComp/adminCategory";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Signup />
      <PopupSignin /> */}
      {/* <Forgot /> */}
      {/* <Confirmation /> */}
      {/* <NewPassword /> */}
      {/* <PassSetAlert /> */}
      {/* <AdminDashboard /> */}
      <AdminCategory />
    </div>
  );
}
