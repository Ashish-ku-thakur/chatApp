import axios from "axios";
import { useEffect } from "react";
import { MASSAGE_API } from "../components/constant/variables";
import { useDispatch, useSelector } from "react-redux";
import { setAllMassage } from "../redux/massageSlicer";

let useAllMassagesArray = () => {
  let { selectedUser } = useSelector((store) => store?.user);
  let dispatch = useDispatch();

  useEffect(() => {
    selectedUser ? getAllMassagesArray() : "";
  }, [selectedUser]);

  let getAllMassagesArray = async () => {
    try {
      let res = await axios.get(
        `${MASSAGE_API}/allMassage/${selectedUser?._id}`
      );
      console.log(res);


      if (res?.data?.chates) {
        dispatch(setAllMassage(res?.data?.chates));
      } else {
        dispatch(setAllMassage(""))
      }


      // !res?.data?.chates ? dispatch(setAllMassage("")) : dispatch(setAllMassage(res?.data?.chates))
      // !res?.data?.matchConversation
      //      ? dispatch(setText(''))
      //    : dispatch(setText(res?.data?.matchConversation?.allMassages));


    } catch (error) {
      dispatch(setAllMassage(""));
      // console.log(error);
    }
  };
};
export default useAllMassagesArray;
