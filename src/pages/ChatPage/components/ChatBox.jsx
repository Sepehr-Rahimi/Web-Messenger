
const ChatBox = ({ children }) => {
  return (
    <div className="w-full bg-slate-200 p-4 grow flex flex-col overflow-auto">
      {children}
    </div>
  )
}

export default ChatBox;