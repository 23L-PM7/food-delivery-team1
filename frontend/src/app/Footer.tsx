import { BackgroundPic } from "./components/icons/backgroundPic";
export function  Footer () {
    return (
        <div className="container mx-auto">
           <div className="bg-green-500  w-[1440px] h-[545px] inset-0 relative">
            <BackgroundPic/>
            <div className="flex absolute">
            <h1>Нүүр</h1>
            <h1>Холбоо барих</h1>
            <h1>Хоолны цэс</h1>
            <h1>Үйлчилгээний нөхцөл</h1>
            <h1>Хүргэлтийн бүс</h1>
            <h1>Нууцлалын бодлого</h1>
            </div>
           </div>
        </div>
    );
} 