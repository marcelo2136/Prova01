import { useEffect, useState } from "react"

const Questao02 = () => {
    const front = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const back = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    const [flag, setFlag] = useState(0)
    const [value, setValue] = useState("")

    useEffect (
        () => {
            setValue("")
            if(flag%2 === 0) setValue((prev)=>prev+""+front)
            else setValue((prev)=>prev+""+back)
        }
        ,
        [flag]
    )

    return (
        <>
            <img src={value} alt="pokemon" style={{ width: '200px'}}/>
            <button onClick = {() => setFlag((anterior)=>anterior+1)}>
                Trocar
            </button>
        </>
    )
}

export default Questao02