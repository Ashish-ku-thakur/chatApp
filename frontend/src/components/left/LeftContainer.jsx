import useAllMassagesArray from "../../hooks/useAllMassagesArray";
import Logout from "./Logout";
import Otherusers from "./Otherusers";
import Search from "./Search";

const LeftContainer = () => {
  useAllMassagesArray()
  return (
    <div className=" h-full overflow-hidden">
      <div className="h-[12%]">
        <Search />
      </div>

      <div className="h-[75%] overflow-y-scroll">
        <Otherusers />
      </div>

      <div className="h-[13%]">
        <Logout />
      </div>
    </div>
  );
};

export default LeftContainer;
