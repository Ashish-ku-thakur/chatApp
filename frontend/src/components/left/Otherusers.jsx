import { useSelector } from "react-redux";
import Otheruser from "./Otheruser";

const Otherusers = () => {
  let { otherUsers } = useSelector((store) => store?.user);

  return (
    <div>
      <div>
        {otherUsers?.map((users) => (
          <Otheruser key={users?._id} data={users} />
        ))}
      </div>
    </div>
  );
};

export default Otherusers;
