import { Footer } from "../Footer"
import Header from "./Header"
import { Category } from "./category"

export default function Home() {
    return (
        <>
        <Category />
        <Header/>
        <Footer/>
        <div className="bg-red-300">hello</div>
        </>
    )
}

