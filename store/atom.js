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
        maths = parseInt(maths / 10) + 1
        chem = parseInt(chem / 10) + 1
        caed = parseInt(caed / 10)  + 1
        esc = parseInt(esc / 10) + 1
        plc = parseInt(plc / 10) + 1
        eng = parseInt(eng / 10) + 1
        sfh = parseInt(sfh / 10)  + 1
        ico = parseInt(ico / 10) + 1
        const sum = (maths*4 + chem*4 + plc*3 + caed*3 + esc*3 + eng + sfh + ico) 
        return (sum)/20
    }
})