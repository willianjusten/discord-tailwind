export type MessageWithUserProps = {
  message: {
    text: string
    avatarUrl: string
    user: string
    date: string
  }
}

function MessageWithUser({ message }: MessageWithUserProps) {
  return (
    <div className="leading-[22px] mt-[17px] flex pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07]">
      <img
        className="w-10 h-10 mr-4 rounded-full mt-0.5"
        src={message.avatarUrl}
        alt={message.user}
      />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-400">
            {message.user}
          </span>
          <span className="text-xs font-medium text-gray-400">
            {message.date}
          </span>
        </p>
        <p className="text-gray-100">{message.text}</p>
      </div>
    </div>
  );
}

export default MessageWithUser