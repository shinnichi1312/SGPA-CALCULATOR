import { useNavigate } from "react-router-dom"

export default function Landing(){
    const navigate = useNavigate()
    return (
      <>
        <h1>
          FIRST SEM SGPA CALCULATOR
        </h1>
        <div>
          <button style={{marginRight:'16px'}} onClick={() => {
            navigate("/c-cycle")
          }}>C - CYCLE</button>
          <button style={{marginRight:'16px'}} onClick={() => {
            navigate("/p-cycle")
          }}>P - CYCLE</button>
        </div>
      </>
    )
  }