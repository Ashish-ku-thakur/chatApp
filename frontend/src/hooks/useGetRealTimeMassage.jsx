import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAllMassage } from "../redux/massageSlicer"

const useGetRealTimeMassage = () => {
    let dispatch = useDispatch()
    let { allMassage } = useSelector((store) => store?.massage)
    let { socket } = useSelector((store) => store?.socket)

    // console.log(allMassage);

    useEffect(() => {
        socket?.on("newMassage", (newMassage) => {
            dispatch(setAllMassage([...allMassage, newMassage]))
        })
    }, [allMassage, socket, setAllMassage])
}

export default useGetRealTimeMassage