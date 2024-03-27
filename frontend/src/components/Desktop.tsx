import { BackgroundPic } from "../components/icons/backgroundPic";
import { Logo } from "../components/icons/Logo";

export function Desktop() {
    return (
        <div className="bg-green-500  w-full h-[788px] relative">
            <div className="h-788px">
                <BackgroundPic />
            </div>
            <div className="inset-0 absolute p-[120px] border-b">
            </div>
        </div >
    );
}
