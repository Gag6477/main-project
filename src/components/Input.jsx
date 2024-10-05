import {useState} from "react";

function Input({array, setArray}) {
    function handleInput() {
        let r = document.querySelector('#r').value;
        let g = document.querySelector('#g').value;
        let b = document.querySelector('#b').value;


        setArray([...array, {
            r: r, g: g, b: b,
        }])
    }

    const [state, setState] = useState({})

    function handleChange() {

        handleUpdateChange()
    }

    function handleUpdateChange() {
        let r = document.querySelector('#r')
        let g = document.querySelector('#g')
        let b = document.querySelector('#b')
        r.value = 0
        g.value = 0
        b.value = 0
        if (r.value < 0) {
            r.value = 0
        }
        if (g.value < 0) {
            g.value = 0
        }
        if (b.value < 0) {
            b.value = 0
        }
        if (r.value > 255) {
            r.value = 255
        }
        if (g.value > 255) {
            g.value = 255
        }
        if (b.value > 255) {
            b.value = 255
        }
        if (r.value.length !== 1 && r.value[0] === '0') {
            r.value = r.value.slice(1)
        }
        if (g.value.length !== 1 && g.value[0] === '0') {
            g.value = g.value.slice(1)
        }
        if (b.value.length !== 1 && b.value[0] === '0') {
            b.value = b.value.slice(1)
        }
    }

    return (
        <div className={'input'}>
            <div>
                <label htmlFor="r">r:</label>
                <input type="number" name="r" id="r" placeholder='R' value={this.state.inputVal}
                       onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="g">g:</label>
                <input type="number" name="g" id="g" placeholder="G" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="b">b:</label>
                <input type="number" name="b" id="b" placeholder="B" onChange={handleChange}/>
            </div>
            <button className={"btn"} onClick={handleInput}>
                Add Color
            </button>
        </div>
    )
}

export default Input;