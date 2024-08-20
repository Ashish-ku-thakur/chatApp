import { useSelector } from "react-redux";

const Selecteduser = () => {
  let { selectedUser } = useSelector((store) => store?.user);

  return (
    <div>
      <div className="flex gap-3 items-center hover:bg-violet-300 rounded-full cursor-pointer">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src={selectedUser?.profilePhoto} />
          </div>
        </div>

        <div className="font-serif font-semibold">
          <p className="text-xl">{selectedUser?.fullname}</p>
        </div>
      </div>
    </div>
  );
};

export default Selecteduser;
