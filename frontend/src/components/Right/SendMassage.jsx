import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { MASSAGE_API } from "../constant/variables";
import { useDispatch, useSelector } from "react-redux";
import { setAllMassage } from "../../redux/massageSlicer";

const SendMassage = () => {
  let [text, setText] = useState("");
  let { selectedUser } = useSelector((store) => store?.user);

  let { allMassage } = useSelector((store) => store?.massage);

  let dispatch = useDispatch();

  useEffect(() => {
    selectedUser && sendMassageHandler()
  }, [])

  let sendMassageHandler = async () => {
    try {
      let res = await axios.post(
        `${MASSAGE_API}/createMassage/${selectedUser?._id}`,
        { text },
        {
          withCredentials: true,
        }
      );
      // console.log(res);

      // dispatch first old then new
      dispatch(setAllMassage([...allMassage, res?.data]));
      setText("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex items-center justify-center text-black">
      <div className="w-[90%] ">
        <div className="w-full">
          <input
            type="text"
            name="massage"
            placeholder="text"
            value={text}
            onChange={(e) => setText(e?.target?.value)}
            className="border-violet-800 border-[1px] outline-none px-3 w-full rounded-l-full py-3"
          />
        </div>
      </div>

      <div onClick={sendMassageHandler} className="cursor-pointer w-[10%]">
        <div className="rounded-r-full bg-violet-500 py-3">
          <AiOutlineSend size={"25px"} />
        </div>
      </div>
    </div>
  );
};

export default SendMassage;
