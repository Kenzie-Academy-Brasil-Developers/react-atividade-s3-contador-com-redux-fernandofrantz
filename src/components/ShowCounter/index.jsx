import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, dec } from "../../store/modules/counter/action";

const ShowCounter = () => {
  const dispatch = useDispatch();
  const nums = useSelector((state) => state.reducer);

  return (
    <>
      <div>
        <h3>{nums}</h3>
        <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>
          {" "}
          +{" "}
        </button>
        <button onClick={() => dispatch({ type: "DEC", payload: 1 })}>
          {" "}
          -{" "}
        </button>
      </div>
    </>
  );
};
export default ShowCounter;
