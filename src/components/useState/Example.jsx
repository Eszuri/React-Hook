import { useState } from 'react'



export function Example1() {
    const [color, nilaiColor] = useState("merah");
    return (
        <>
            <p>Antum Berwarna {color}</p> {/* hasil: Antum Berwarna merah */}
        </>
    )
}

export function Example1___2() {
    const [color, nilaiColor] = useState({
        warna: "Merah",
        warna2: "Biru",
    });
    return (
        <>
            <p>Antum Berwarna {color.warna} dan {color.warna2}</p> {/* hasil: Antum Berwarna Merah */}
        </>
    )
}

export function Example1___4() {
    const [color, nilaiColor] = useState([
        "Hijau", "Merah", "Biru",
    ]);
    return (
        <>
            <p>Antum Berwarna {color[0]}, {color[1]}, dan {color[2]}</p>
            <p>Semua Warna: {color}</p>
        </>
    )
}

export function Example2() {
    const [color, nilaiColor] = useState("merah");
    const gaya = {
        backgroundColor: 'red',
        width: '100px',
        borderRadius: '5px',
        textAlign: 'center'
    };
    return (
        <>
            <p>Antum Berwarna {color}</p> {/* hasil: Antum Berwarna merah */}
            <button style={gaya} onClick={function () { nilaiColor("kuning") }}>Eksekusi</button>
        </>
    )
}


export function Example2___2() {
    const [angka, nilaiAngka] = useState(0);
    const gaya = {
        backgroundColor: 'red',
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '10px'
    };
    return (
        <>
            <p>Ini Angka : <span style={{ color: 'yellow' }}>{angka}</span> </p>
            <button style={gaya} onClick={function () { nilaiAngka(angka + 1) }}>TAMBAH</button>
            <button style={gaya} onClick={function () { nilaiAngka(angka - 1) }}>KURANG</button>
        </>
    )
}

export const example1 =
    `import { useState } from 'react'

function Example() {
    const [color, nilaiColor] = useState("merah");
    return (
        <>
        <p>Antum Berwarna {color}</p> {/* hasil: Antum Berwarna merah */}
        </>
)}`;

export const example1___2 =
    `import { useState } from 'react'

function Example() {
    const [color, nilaiColor] = useState({
        warna: "Merah",
        warna2: "Biru",
    });
    return (
        <>
        <p>Antum Berwarna {color.warna} dan {color.warna2}</p> {/* hasil: Antum Berwarna Merah dan Biru */}
        </>
)}`;

export const example1___4 =
    `import { useState } from 'react'

function Example() {
    const [color, nilaiColor] = useState([
        "Hijau", "Merah", "Biru",
    ]);
    return (
        <>
        <p>Antum Berwarna {color[0]}, {color[1]}, dan {color[2]}</p> {/* hasil: Antum Berwarna Hijau, Merah, dan Biru */}
        <p>Semua Warna: {color}</p>
        </>
)}`;

export const example2 =
    `import { useState } from 'react'

function Example() {
    const [color, nilaiColor] = useState("merah");
    const gaya = {
        backgroundColor: 'red',
        width: '100px',
        borderRadius: '5px',
        textAlign: 'center'
    };
    return (
        <>
            <p>Antum Berwarna {color}</p> {/* hasil: Antum Berwarna merah */}
            <button style={gaya} onClick={function () { nilaiColor("kuning") }}>Eksekusi</button>
        </>
    )
}`;

export const example2___2 =
    `import { useState } from 'react'

function Example() {
    const [angka, nilaiAngka] = useState(0);
    const gaya = {
        backgroundColor: 'red',
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '10px'
    };
    return (
        <>
        <p>Ini Angka : <span style={{ color: 'yellow' }}>{angka}</span> </p> 
        <button style={gaya} onClick={function () { nilaiAngka(angka + 1) }}>TAMBAH</button>
        <button style={gaya} onClick={function () { nilaiAngka(angka - 1) }}>KURANG</button>
        </>
    )
}`;