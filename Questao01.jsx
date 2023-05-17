import {useState, useEffect} from "react"

function Questao01X(){

    const alunos = [
        { nome: "Sicrano", notas : {ap1 : 8.0, ap2 : 5.4} },
        { nome: "Beltrano", notas : {ap1 : 6.5, ap2 : 3.5} },
        { nome: "Fulano", notas : {ap1 : 7.3, ap2 : 9.2} }
    ]

    const [media0, setMedia0] = useState(0)
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)

    const medias = (media_alunos) => {

        setMedia0((prev)=>media_alunos[0])
        setMedia1((prev)=>media_alunos[1])
        setMedia2((prev)=>media_alunos[2])
    }

    const [menores, setMenores] = useState("")

    useEffect (
        () => {
            let mediaAlunos = [media0, media1, media2]
            let nomes = ["Sicrano", "Beltrano", "Fulano"]

            setMenores("")
            for(let i = 0; i < mediaAlunos.length; i++){
                if(mediaAlunos[i] <= 5.0) setMenores((prev)=>prev+" "+nomes[i])
            }
        }
        ,
        [media0, media1, media2]
    )

    return (
        <>
            <Questao01Y alunos = {alunos} medias = {medias}/>
            <h3>{menores}</h3>
        </>
    )
}

const Questao01Y = ({alunos, medias}) => {

    const [media0, setMedia0] = useState(0)
    const [media1, setMedia1] = useState(0)
    const [media2, setMedia2] = useState(0)

    let medias2 = [media0, media1, media2]

    useEffect (

        () => {
            setMedia0((ant) => ((alunos[0].notas.ap1 + alunos[0].notas.ap2)/2) )
            setMedia1((ant) => ((alunos[1].notas.ap1 + alunos[1].notas.ap2)/2) )
            setMedia2((ant) => ((alunos[2].notas.ap1 + alunos[2].notas.ap2)/2) )
        }
        ,
        [alunos]
    )

    return (
        <>
            <h1>médias: {medias(medias2)}</h1>
        </>
    )
}

export default Questao01X