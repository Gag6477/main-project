function ColorBox({r, g, b}) {
    return (
        <div style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            border: '1px solid black',
        }}></div>
    )
}

export default ColorBox;