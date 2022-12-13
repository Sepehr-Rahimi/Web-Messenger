import { useNavigate } from "react-router-dom";
import backSvg from './../../../common/SVG`s/back.svg'
import infoSvg from './../SVG`s/info.svg'


const ChatInfo = ({profileImage,userName,lastSeen}) => {
  const navigate = useNavigate();


  return (
    <div className="bg-slate-300 p-4 shadow-sm w-full flex justify-between items-center">
      <div className="flex items-center grow ">
        <div className="mr-4 cursor-pointer flex justify-center items-center" onClick={() => navigate(-1)}>
          <img className="w-3 h-3 mr-1" src={backSvg} alt="back" />
          <span>Back</span>
        </div>
        <div className="flex items-center grow">
          <div className="mr-4">
            <img className="rounded-full w-12 h-12" src={profileImage} alt={userName} />
          </div>
          <div>
            <div className="mb-1 text-black font-bold text-sm">
              {userName}
            </div>
            <div className="text-slate-400 text-xs">
              {lastSeen}
            </div>
          </div>
        </div>
      </div>
      <img className="items-center cursor-pointer w-5 h-5" src={infoSvg} alt="info" />
  </div>
  )
}

export default ChatInfo;