import Order from "@/components/details";

import { Category } from "@/components/category";
import Header from "@/components/Header";
import OrderCon from "@/components/orderconfirmation";
import { StepTwo } from "@/components/stepTwo";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <StepTwo />
      <Footer />
    </div>
  );
}
