import { useRouter } from "next/router";

import ChannelTopbar from "components/ChannelTopbar";
import ChannelList from "components/ChannelList";
import ServerHeader from "components/ServerHeader";
import Message from 'components/Message'
import MessageWithUser from 'components/MessageWithUser'

import { data } from "data";

export default function Server() {
  let router = useRouter();
  let server = data.find((server) => +server.id === +router.query.sid!)!;

  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.cid!);

  return (
    <>
      <div className="flex-col hidden bg-gray-800 md:flex w-60">
        <ServerHeader name={server.label} />
        <ChannelList server={server} />
      </div>

      <div className="flex flex-col flex-1 flex-shrink min-w-0 bg-gray-700">
        <ChannelTopbar channel={channel} />

        <div className="flex-1 overflow-y-scroll">
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
  );
}



