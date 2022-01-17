import { Check, Chevron, Verified } from "components/Icons";

export type ServerHeaderProps = {
  name: string
}

function ServerHeader({ name }: ServerHeaderProps) {
  return (
    <button className="flex items-center h-12 px-4 font-semibold text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
      <div className="relative w-4 h-4 mr-1">
        <Verified className="absolute w-4 h-4 text-gray-550" />
        <Check className="absolute w-4 h-4" />
      </div>
      {name}
      <Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
    </button>
  )
}

export default ServerHeader