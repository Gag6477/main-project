function CreateColor({array,setArray}) {
    function HandleCreateColor() {
        setArray([...array,{
            r: Math.floor(Math.random()*255),
            g: Math.floor(Math.random()*255),
            b: Math.floor(Math.random()*255),
        }]);
        console.log(array)
    }
    return (
        <button onClick={() => {
            HandleCreateColor()
        }}>
            Add Color
        </button>
    )
}

export default CreateColor;