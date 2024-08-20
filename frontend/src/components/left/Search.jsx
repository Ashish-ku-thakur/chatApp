import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setOtherusers } from "../../redux/userSlicer";

const Search = () => {
  let [searchUser, setSearchUser] = useState("")
  let { otherUsers2 } = useSelector((store) => store?.user)

  let dispatch = useDispatch()

  // search feature
  let searchUserHandler = (e) => {
    e?.preventDefault()
    let ch = otherUsers2?.filter((ser) => ser?.fullname.toLowerCase().includes(searchUser.toLowerCase()))
    dispatch(setOtherusers(ch))

  }
  return (
    <div>
      <form onClick={searchUserHandler} className="text-black w-full my-3">
        <div className="flex w-full">
          <div className="w-[85%]">
            <input
              type="text"
              placeholder="Type here"
              value={searchUser}
              onChange={(e) => setSearchUser(e?.target?.value)}
              className="border-violet-800 border-[1px] outline-none w-full rounded-l-full p-3"
            />
          </div>

          <button type="submit" className="w-[15%] bg-violet-500 flex items-center justify-center rounded-r-full">
            <CiSearch size={"24px"} />
          </button>
        </div>
      </form>
    </div>

  );
};

export default Search;
