import { useSelector } from "react-redux";

export default function Display() {
    const value = useSelector((state: any) => state.value);

    return (
        <div>
            <p>{value}</p>
        </div>
    );
}
