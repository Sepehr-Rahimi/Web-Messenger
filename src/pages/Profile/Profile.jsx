import you from "../../data/you";
import backSvg from './../../common/SVG`s/back.svg'
import { useNavigate } from "react-router-dom";
const {bio,id,lastSeen,phone,pic,userName} = you

const Profile = () => {


  const navigate = useNavigate()


  return (
    <div className="bg-slate-200 shadow-md shadow-black p-3 m-3 w-full max-w-[400px] mx-auto flex flex-col">
      <button onClick={() => {navigate(-1)}} className="flex items-center">
        <img className="w-4 h-4 mr-2" src={backSvg} alt="back" />
        <span>Back</span>
      </button>
      <div className="border-b-2 pb-3 mb-3">
        <img src="" alt="" />
        <img className="rounded-full mx-auto" src={pic} alt="you" />
      </div>
      <div className="p-2 shadow-md shadow-black rounded-lg">
        <div className="font-bold text-lg">Details :</div>
        <div className="p-1 border-slate-400 border rounded-xl">
          <div>
            <span className="font-semibold">UserName : </span>
            <span className="font-light">{userName}</span>
          </div>
          <div className="font-extralight text-sm">({lastSeen})</div>
        </div>
        <div className="p-1 border-slate-400 border rounded-xl my-2">
          <span className="font-semibold">ID : </span>
          <span className="font-light">{id}</span>
        </div>
        <div className="p-1 border-slate-400 border rounded-xl my-2">
          <span className="font-semibold">Phone : </span>
          <span className="font-light">{phone}</span>
        </div>
        <div className="flex flex-col p-1 border-slate-400 border rounded-xl my-2">
          <span className="font-semibold">Bio : </span>
          <span className="font-light pl-5 h-20">{bio}</span>
        </div> 
      </div>
    </div>
  );
};

export default Profile;
