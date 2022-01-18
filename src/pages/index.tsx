export default function Home() {
  return (
    <>
      <div className="flex flex-col w-60 bg-gray-800">
        <div className="flex items-center px-3 h-12 font-title font-semibold text-white shadow-md">
          Dashboard
        </div>
        <div className="overflow-y-scroll flex-1 p-3 space-y-2 font-medium text-gray-300 scrollbar-hide">
          <p className="text-white">Friends</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700"></div>
    </>
  )
}
