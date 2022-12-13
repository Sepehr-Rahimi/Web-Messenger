import ChatItem from "./components/ChatItem";
import chats from "../../data/chats";
import you from "../../data/you";
import ProfileItem from "./components/ProfileItem";

const Chats = () => {
  return (
    <div className="max-w-[400px] h-screen mx-auto flex flex-col overflow-hidden">
      <ProfileItem id='profile' latestMessage={you.lastSeen} profileImage={you.pic} userName={you.userName} />
      <div className="bg-slate-200 p-3 mt-3 rounded-t-md">Messenger</div>
      <div className="border-2 border-slate-200 w-full shadow-md mb-3 flex flex-col  shadow-black overflow-auto ">
        {chats.map(({id,latestMessege,userName,pic}) => (
          <ChatItem key={id} id={id} latestMessage={latestMessege} profileImage={pic} userName={userName}  />
        ))}
      </div>
    </div>
  );
};

export default Chats;
