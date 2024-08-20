import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlicer";

const Otheruser = ({ data }) => {
  let dispatch = useDispatch();

  let { onlineUsers } = useSelector((store) => store?.user)

  let isOnline = onlineUsers?.includes(data?._id)

  let selUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };


  return (
    <div
      onClick={() => selUserHandler(data)}
      className="flex gap-3 items-center my-3 hover:bg-violet-300 rounded-full cursor-pointer"
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-16 rounded-full">
          <img src={data?.profilePhoto} />
        </div>
      </div>

      <div className="font-serif font-semibold">
        <p className="text-xl">{data?.fullname}</p>
      </div>
    </div>
  );
};

export default Otheruser;
