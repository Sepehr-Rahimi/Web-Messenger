import { useNavigate } from "react-router-dom";




const ChatItem = ({profileImage,userName,latestMessage,id}) => {
  
  const navigate = useNavigate()


  const handleClick = () => {
      navigate(`/chats/${id}`)
  }




  return (
    <div className="flex rounded items-center w-full bg-white p-4 mb-4 border-b cursor-pointer shadow-md" onClick={handleClick}>
      <div className="mr-4">
        <img className="rounded-full w-16 h-16" src={profileImage} alt={userName} />
      </div>
      <div>
        <div className="mb-2 text-black font-bold text-lg">
          {userName}
        </div>
        <div className=" text-slate-400 text-base">
          {latestMessage}
        </div>
      </div>
    </div>
  )
}

export default ChatItem;