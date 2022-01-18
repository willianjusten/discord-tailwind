export type MessageProps = {
  message: {
    text: string
  }
}

function Message({ message }: MessageProps) {
  return (
    <div className="py-0.5 pr-16 pl-4 leading-[22px] hover:bg-gray-950/[.07]">
      <p className="pl-14 text-gray-100">{message.text}</p>
    </div>
  )
}

export default Message
