import { Check, Chevron, Verified } from 'components/Icons'

export type ServerHeaderProps = {
  name: string
}

function ServerHeader({ name }: ServerHeaderProps) {
  return (
    <button className="flex items-center px-4 h-12 font-title text-[15px] font-semibold text-white hover:bg-gray-550/[0.16] shadow-sm transition">
      <div className="relative mr-1 w-4 h-4">
        <Verified className="absolute w-4 h-4 text-gray-550" />
        <Check className="absolute w-4 h-4" />
      </div>
      {name}
      <Chevron className="ml-auto w-[18px] h-[18px] opacity-80" />
    </button>
  )
}

export default ServerHeader
