export type BlockProps = {
  href: string
  title: string
  description: string
}

const Block = ({ href, title, description }: BlockProps) => (
  <a
    className="flex flex-col p-6 mt-6 w-96 text-left hover:text-blue-600 focus:text-blue-600 rounded-xl border"
    href={href}
  >
    <h3 className="text-2xl font-bold">{title} &rarr;</h3>
    <p className="mt-4 text-xl">{description}</p>
  </a>
)

export default Block
