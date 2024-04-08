import Header from "@/components/Header";
import { Footer } from "../Footer";
import { Login } from "@/components/Login";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="container mx-auto w-[549px]">
                <Login />
            </div>

            <Footer />
        </div>
    );
}
