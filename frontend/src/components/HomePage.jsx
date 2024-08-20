import useOtherusers from "../hooks/useOtherusers";
import LeftContainer from "./left/LeftContainer";
import RightContainer from "./Right/RightContainer";

const HomePage = () => {
  useOtherusers();

  return (
    <div className="flex gap-2 w-full h-screen justify-center items-center ">
      <div className="w-[70%] h-[70%] flex bg-black text-white">
        <div className="border-black border-[1px] w-[35%] h-full px-3">
          <LeftContainer />
        </div>
        <div className=" border-black border-[1px] w-[65%] h-full px-4">
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
