import { useRouter } from 'next/router'

import ChannelList from 'components/ChannelList'
import ChannelTopbar from 'components/ChannelTopbar'
import Message from 'components/Message'
import MessageWithUser from 'components/MessageWithUser'
import ServerHeader from 'components/ServerHeader'

import { data } from 'data'

export default function Server() {
  let router = useRouter()
  let server = data.find((server) => +server.id === +router.query.sid!)!

  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.cid!)

  return (
    <>
      <div className="hidden flex-col w-60 bg-gray-800 md:flex">
        <ServerHeader name={server.label} />
        <ChannelList server={server} />
      </div>

      <div className="flex flex-col flex-1 shrink min-w-0 bg-gray-700">
        <ChannelTopbar channel={channel} />

        <div className="overflow-y-scroll flex-1">
          {channel?.messages.map((message, i) => (
            <div key={message.id}>
              {i === 0 || message.user !== channel?.messages[i - 1].user ? (
                <MessageWithUser message={message} />
              ) : (
                <Message message={message} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
