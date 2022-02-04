import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"

const Component1 = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

    return ( 
        <div className="component1 component">
            <h3>Component 1 (level 2)</h3>
            
            <button onClick={() => depositMoney(1)}>Increment</button>
            <button onClick={() => withdrawMoney(1)}>Decrement</button>
        </div>
     );
}
 
export default Component1;