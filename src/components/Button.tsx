import { increment } from "../actions";
import { useDispatch } from "react-redux";

export default function Button() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(increment);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
    
}
