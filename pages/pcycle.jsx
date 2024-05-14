import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { caedAtom, chemAtom, engAtom, escAtom, icoAtom, mathsAtom, plcAtom, sfhAtom, sgpaSelector } from "../store/atom"
import { useState } from "react"

export default function Pcycle() {

    return <div>
        <RecoilRoot>
        <Maths/>
        <Physics/>
        <IOT/>
        <Elective/>
        <PLC/>
        <English/>
        <IDT/>
        <KAN/>
        <SGPA/>
        </RecoilRoot>
    </div>

}

function Maths(){
    const marks = useSetRecoilState(mathsAtom)
    console.log(marks)
    let s = 0

    return (
        <div>
            <h1><u>PHYSICS CYCLE</u></h1>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Mathematics for CSE Stream-1(BMATS101)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function Physics(){
    const marks = useSetRecoilState(chemAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Physics for CSE Stream(BPHYS102/202)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function Elective(){
    const marks = useSetRecoilState(escAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Elective Subjects(BESCK101/2/3/4-D)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function IOT(){
    const marks = useSetRecoilState(caedAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}} >Intro to IOT(BETCK105H/205H)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function PLC(){
    const marks = useSetRecoilState(plcAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}} >Introduction to C++ programming(BPLCK105D-205D)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function English(){
    const marks = useSetRecoilState(engAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}} >Communicative English(BENGK106/206)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function IDT(){
    const marks = useSetRecoilState(icoAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}} >Inovation and Design Thinking(BIDTK108/208)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function KAN(){
    const marks = useSetRecoilState(sfhAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Balake Kannada/Samskrutika Kannada(BKBKK107-207)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function SGPA(){
    const sgpa = useRecoilValue(sgpaSelector)
    const [s,sS] = useState(0)
    console.log(sgpa)
        return(<div>
            <button onClick={()=>{
                 sS(sgpa)
            }}>CALCULATE SGPA</button>
        <h3>{s}</h3>
    </div>)
}