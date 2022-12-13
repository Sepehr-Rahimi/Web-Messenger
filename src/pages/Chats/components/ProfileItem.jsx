import { useNavigate } from "react-router-dom";




const ProfileItem = ({profileImage,userName,latestMessage}) => {
  
  const navigate = useNavigate()


  const handleClick = () => {
      navigate(`/profile`)
  }




  return (
    <div className="flex rounded items-center w-full bg-white p-2 mt-2 border-b cursor-pointer shadow-md border-2 border-slate-200" onClick={handleClick}>
      <div className="mr-4">
        <img className="rounded-full w-12 h-12" src={profileImage} alt={userName} />
      </div>
      <div>
        <div className="mb-2 text-black font-bold text-base">
          {userName}
        </div>
        <div className=" text-slate-400 text-xs">
          {latestMessage}
        </div>
      </div>
    </div>
  )
}

export default ProfileItem;