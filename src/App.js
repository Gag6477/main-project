import ColorBox from "./components/ColorBox";
import './App.css';
import {useState} from "react";
import CreateColor from "./components/CreateColor";
import Erase from "./components/Erase";
import Input from "./components/Input";

function App() {
    const [array, setArray] = useState([
        {
            r: 100, g: 10, b: 20,
        },
        {
            r: 30, g: 10, b: 20,
        }
    ]);

    return (<div className="App">
        <div className="Main">
            <div className="button">
                <CreateColor array={array} setArray={setArray}/>
                <Erase setArray={setArray}/>
            </div>
            <div style={{
                width: '70%',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',

            }}>
                <div style={{
                    width: '90%',
                    height: '90%',
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    border: '1px solid black',
                }}>
                    {array.map(({r, g, b}, index) => {
                        return (<ColorBox key={index} r={r} g={g} b={b}/>)
                    })}
                </div>
                <Input array={array} setArray={setArray}/>
            </div>
        </div>
    </div>);
}

export default App;
