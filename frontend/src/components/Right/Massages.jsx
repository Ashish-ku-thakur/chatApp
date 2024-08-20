import { useSelector } from "react-redux";
import Massage from "./Massage";
import useGetRealTimeMassage from "../../hooks/useGetRealTimeMassage";

const Massages = () => {
  useGetRealTimeMassage()

  let { allMassage } = useSelector((store) => store?.massage);

  // console.log(allMassage);
  
  if (!allMassage) {
    return null;
  }

  return (
    <div className="my-3">
      <div>
        {allMassage?.map((mass) => (
          <Massage key={mass?._id} data={mass} />
        ))}
      </div>
    </div>
  );
};

export default Massages;
