import { selector, atom } from "recoil"


export const mathsAtom = atom({
    key : "mathsAtom",
    default : 0
})
export const chemAtom = atom({
    key : "chemAtom",
    default : 0
})
export const plcAtom = atom({
    key : "plcAtom",
    default : 0
})
export const caedAtom = atom({
    key : "caedAtom",
    default : 0
})
export const escAtom = atom({
    key : "escAtom",
    default : 0
})
export const engAtom = atom({
    key : "engAtom",
    default : 0
})
export const sfhAtom = atom({
    key : "sfhAtom",
    default : 0
})
export const icoAtom = atom({
    key : "icoAtom",
    default : 0
})

function point (sub){
    return (sub == "100" ? 10 : parseInt(sub / 10) + 1)
}

export const sgpaSelector = selector({
    key : "sgpaSelector",
    get : ({get}) => {
        let maths = get(mathsAtom)
        let chem = get(chemAtom)
        let plc = get(plcAtom)
        let caed = get(caedAtom)
        let esc = get(escAtom)
        let eng = get(engAtom)
        let sfh = get(sfhAtom)
        let ico = get(icoAtom)
        maths= point(maths)
        chem = point(chem)
        plc = point(plc)
        caed =point(caed)
        esc = point(esc)
        eng = point(eng)
        sfh = point(sfh)
        ico =point(ico)
        const sum = (maths*4 + chem*4 + plc*3 + caed*3 + esc*3 + eng + sfh + ico) 
        return (sum)/20
    }
})