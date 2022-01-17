import Image from 'next/image'

const Footer = () => (
  <footer className="flex justify-center items-center w-full h-24 border-t">
    <a
      className="flex justify-center items-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="ml-2 h-4"
        width={100}
        height={100}
      />
    </a>
  </footer>
)

export default Footer
