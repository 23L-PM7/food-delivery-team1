import Signup from "@/components/Signup";
import { Forgot } from "@/components/forgotpass/forgotpass";
import { PopupSignin } from "@/components/popupSignin";
import { Confirmation } from "@/components/forgotpass/sentConfirmation";
import { NewPassword } from "@/components/forgotpass/newpassword";
import { PassSetAlert } from "@/components/forgotpass/passwordAlert";
import { AdminDashboard } from "@/components/adminComp/adminDashboard";
import Header from "@/components/Header";

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
      <AdminDashboard />
    </div>
  );
}
