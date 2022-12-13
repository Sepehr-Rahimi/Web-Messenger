import clsx from 'clsx';

const ChatBubble = ({ time, status,children }) => {
  return (
    <div className={clsx('bg-white max-w-xs shadow-lg mb-4 rounded-xl p-4', {
      'bg-neutral-100 self-end': status === 'sender',
      'bg-white ml-auto': status === 'receiver',
    })}>
      <div className="mb-2">{children}</div>
      <div className="text-gray-400 text-xs">
        {time}
      </div>
    </div>
  )
}

export default ChatBubble;