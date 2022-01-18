import { useRouter } from "next/router";

import * as Icons from "components/Icons";
import ServerHeader from "components/ServerHeader";
import Message from 'components/Message'
import MessageWithUser from 'components/MessageWithUser'

import { data, ServerData } from "../../../../../data";
import ChannelList from "components/ChannelList";

export default function Server() {
  let router = useRouter();
  let server: ServerData = data.find((server) => +server.id === +router.query.sid!)!;

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
        <div className="flex items-center h-12 px-2 shadow-sm">
          <div className="flex items-center">
            <Icons.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
            <span className="mr-2 text-white font-title whitespace-nowrap">
              {channel?.label}
            </span>
          </div>

          {channel?.description && (
            <>
              <div className="hidden md:block w-px h-6 mx-2 bg-white/[.06]"></div>
              <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
                {channel?.description}
              </div>
            </>
          )}

          {/* Mobile buttons */}
          <div className="flex items-center ml-auto md:hidden">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="w-6 h-6 mx-2" />
            </button>
          </div>

          {/* Desktop buttons */}
          <div className="items-center hidden ml-auto md:flex">
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Bell className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Pin className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.People className="w-6 h-6 mx-2" />
            </button>
            <div className="relative mx-2">
              <input
                type="text"
                placeholder="Search"
                className="h-6 px-1.5 text-sm font-medium placeholder-gray-400 bg-gray-900 border-none rounded w-36"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Icons.Spyglass className="w-4 h-4 mr-1.5 text-gray-400" />
              </div>
            </div>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.Inbox className="w-6 h-6 mx-2" />
            </button>
            <button className="text-gray-200 hover:text-gray-100">
              <Icons.QuestionCircle className="w-6 h-6 mx-2" />
            </button>
          </div>
        </div>

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



