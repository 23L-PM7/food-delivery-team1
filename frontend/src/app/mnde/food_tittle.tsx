import Food_name from "./food_name";
import Food_price from "./food_price";

export default function Food_tittle() {
    return (
        <div className="flex flex-col">
            <Food_name />
            <Food_price />
        </div>
    )
}