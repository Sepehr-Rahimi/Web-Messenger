// import clsx from 'clsx';
import sendSvg from './../SVG`s/send.svg'


const ChatInput = ({ text, status }) => {
  return (
    <div className="w-full flex p-4 bg-slate-500">
      <div className='bg-white px-2 py-2 rounded w-full flex'>
        <input type="text" className="pr-5 grow bg-white rounded h-full w-full outline-0" placeholder='Type your message' />
        <img className='w-5 h-5 cursor-pointer' src={sendSvg} alt="send" />
      </div>
    </div>
  )
}

export default ChatInput;