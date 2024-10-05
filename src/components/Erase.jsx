function Erase({setArray}) {
    function EraseColors() {
        setArray([]);
    }

    return (
        <button onClick={() => {
            EraseColors();
        }}> Erase </button>
    )
}

export default Erase;