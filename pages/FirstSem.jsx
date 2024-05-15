import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { caedAtom, chemAtom, engAtom, escAtom, icoAtom, mathsAtom, plcAtom, sfhAtom, sgpaSelector } from "../store/atom"
import { useState } from "react"

export default function Ccycle() {

    return <div>
        <RecoilRoot>
        <Maths/>
        <Chemistry/>
        <CAED/>
        <Elective/>
        <PLC/>
        <English/>
        <ICO/>
        <SFH/>
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
            <h1><u>CHEMISTRY CYCLE</u></h1>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Mathematics for CSE Stream(BMATS101/201)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function Chemistry(){
    const marks = useSetRecoilState(chemAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Chemistry for CSE Stream(BCHES102/202)</h3>
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
function CAED(){
    const marks = useSetRecoilState(caedAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Computer Aided Engineering drawings(BCEDK103/203)</h3>
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
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Introduction to Python Programming(BPLCK105B-205B)</h3>
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
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Communicative English(BENGK106/206)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
                (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
            }}></input>
        </div>
    )
}
function ICO(){
    const marks = useSetRecoilState(icoAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Indian Constitution(BICOK107/207)</h3>
            <input type="text" placeholder="MARKS/100" onChange={(e)=>{
               (e.target.value ==  "")? marks(0) : marks(() => s + parseInt(e.target.value))
               
            }}></input>
        </div>
    )
}
function SFH(){
    const marks = useSetRecoilState(sfhAtom)
    let s = 0

    return (
        <div>
            <h3 style={{marginRight:'16px', display:"inline-block"}}>Scientific Foundation Of Health(BSFHK108/208)</h3>
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