import { useState } from "react";
import ChannelLink from "components/ChannelLink";
import { Arrow } from "components/Icons";
import { ServerData } from 'data'

export type ChannelListProps = {
  server: ServerData
}

function ChannelList({ server }: ChannelListProps) {
  let [closedCategories, setClosedCategories] = useState<Array<number>>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  }

  return (
    <div className="flex-1 overflow-y-scroll scrollbar-hide font-medium text-gray-300 pt-3 space-y-[21px]">
      {server.categories.map((category) => (
        <div key={category.id}>
          {category.label && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide hover:text-gray-100 w-full"
            >
              <Arrow
                className={`${closedCategories.includes(category.id) ? "-rotate-90" : ""
                  } w-3 h-3 mr-0.5 transition duration-200`}
              />
              {category.label}
            </button>
          )}

          <div className="space-y-0.5 mt-[5px]">
            {category.channels
              .filter((channel) => {
                let categoryIsOpen = !closedCategories.includes(
                  category.id
                );

                return categoryIsOpen || channel.unread;
              })
              .map((channel) => (
                <ChannelLink serverId={server.id} channel={channel} key={channel.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChannelList
