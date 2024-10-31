import { Button } from "@mui/material"
import { serverErrorImg } from "../../assets/image"
import { useNavigate } from "react-router-dom"

function ServerError() {
  const navigate = useNavigate()
  const backToHome = () => navigate('/')

  return <div className="w-screen h-screen flex flex-col items-center justify-center">
    <img src={serverErrorImg} alt="not-found" className="w-[90%] md:w-3/4 max-w-[500px]" />
    <Button onClick={backToHome} >
      بازگشت به خانه
    </Button>
  </div>
}

export default ServerError