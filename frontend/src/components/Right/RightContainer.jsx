import Massages from "./Massages";
import Selecteduser from "./Selecteduser";
import SendMassage from "./SendMassage";

const RightContainer = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="h-[12%] mt-3">
        <Selecteduser />
      </div>

      <div className="h-[70%]  my-2 overflow-y-scroll">
        <Massages />
      </div>

      <div className="h-[10%] mt-2">
        <SendMassage />
      </div>
    </div>
  );
};

export default RightContainer;
