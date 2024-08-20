import axios from "axios";
import { CiLogout } from "react-icons/ci";
import { USER_API } from "../constant/variables";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthuser, setOtherusers, setOtherusers2, setSelectedUser } from "../../redux/userSlicer";
import { setAllMassage } from "../../redux/massageSlicer";
const Logout = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch()
  let logoutHandler = async () => {
    try {
      let res = await axios.get(`${USER_API}/logout`, {
        withCredentials: true,
      });

      if (res?.data?.success) {
        // dispatch All details null

        dispatch(setAuthuser(null))
        dispatch(setOtherusers(null))
        dispatch(setOtherusers2(null))
        dispatch(setSelectedUser(null))
        dispatch(setAllMassage(null))
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div onClick={logoutHandler} className="flex items-center gap-3 cursor-pointer">
        <CiLogout size={"45px"} />

        <p className="font-semibold text-2xl">Logout</p>
      </div>
    </div>
  );
};

export default Logout;
