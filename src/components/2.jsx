import { useSelector } from "react-redux"

const Component2 = (props) => {
    const state = useSelector((state) => state.bank);

    return ( 
        <div className="component2 component">
            <h3>Component 2 (level 2)</h3>
            <p>Vrednost iz A: <span>{state}</span></p>
        </div>
     );
}
 
export default Component2;