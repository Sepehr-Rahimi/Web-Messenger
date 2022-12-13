import ChatInfo from './components/ChatInfo';
import ChatBox from './components/ChatBox';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';
import users from '../../data/users';
import messages from '../../data/messages';

import { useParams } from 'react-router-dom';

const ChatPage = () => {

  const {id:selectedId} = useParams()
  const seletctedUser = users.find(({id}) =>  id == selectedId)
  const {userName,pic,lastSeen} = seletctedUser
  const selectedMessages = messages.find(({id}) => id == selectedId )


  return (
    <div className="flex flex-col h-screen">
      <ChatInfo lastSeen={lastSeen} profileImage={pic} userName={userName} />
      <ChatBox>
        {selectedMessages.messages.map(({staus,text,time}) => (
          <ChatBubble status={staus} time={time} key={text + time}>
            {text}
          </ChatBubble>
        ))}
      </ChatBox>
      <ChatInput />
    </div>
  )
};

export default ChatPage;