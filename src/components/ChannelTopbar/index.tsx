import * as Icons from 'components/Icons'

export type ChannelTopbarProps = {
  channel?: {
    label?: string
    description?: string
  }
}

function ChannelTopbar({ channel }: ChannelTopbarProps) {
  return (
    <div className="flex items-center px-2 h-12 shadow-sm">
      <div className="flex items-center">
        <Icons.Hashtag className="mx-2 w-6 h-6 font-semibold text-gray-400" />
        <span className="mr-2 font-title text-white whitespace-nowrap">
          {channel?.label}
        </span>
      </div>

      {channel?.description && (
        <>
          <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
          <div className="hidden mx-2 text-sm font-medium text-gray-200 truncate md:block">
            {channel?.description}
          </div>
        </>
      )}

      {/* Mobile buttons */}
      <div className="flex items-center ml-auto md:hidden">
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.HashtagWithSpeechBubble className="mx-2 w-6 h-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.People className="mx-2 w-6 h-6" />
        </button>
      </div>

      {/* Desktop buttons */}
      <div className="hidden items-center ml-auto md:flex">
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.HashtagWithSpeechBubble className="mx-2 w-6 h-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Bell className="mx-2 w-6 h-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Pin className="mx-2 w-6 h-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.People className="mx-2 w-6 h-6" />
        </button>
        <div className="relative mx-2">
          <input
            type="text"
            placeholder="Search"
            className="px-1.5 w-36 h-6 text-sm font-medium placeholder:text-gray-400 bg-gray-900 rounded border-none"
          />
          <div className="flex absolute inset-y-0 right-0 items-center">
            <Icons.Spyglass className="mr-1.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.Inbox className="mx-2 w-6 h-6" />
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <Icons.QuestionCircle className="mx-2 w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default ChannelTopbar
