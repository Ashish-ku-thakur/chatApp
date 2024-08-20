import axios from "axios";
import { useEffect } from "react";
import { USER_API } from "../components/constant/variables";
import { useDispatch } from "react-redux";
import { setOtherusers, setOtherusers2 } from "../redux/userSlicer";

let useOtherusers = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    getOtherusers();
  }, []);

  let getOtherusers = async () => {
    try {
      let res = await axios.get(`${USER_API}/otherUsers`);
        // console.log(res);
      dispatch(setOtherusers(res?.data?.getotherUsers));
      dispatch(setOtherusers2(res?.data?.getotherUsers));
    } catch (error) {
      console.log(error);
    }
  };
};
export default useOtherusers;
