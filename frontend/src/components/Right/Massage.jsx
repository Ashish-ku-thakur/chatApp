import { useSelector } from "react-redux";

const Massage = ({ data }) => {
  let {authuser} = useSelector((store) => store?.user)
  return (
    <div>
      <div className={`chat ${authuser?._id == data?.senderId ? "chat-end":"chat-start"}`}>
        <div className="chat-bubble">{data?.massage}</div>
      </div>
    </div>
  );
};

export default Massage;
