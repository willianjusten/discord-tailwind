import type { AppProps } from 'next/app'
import Head from 'next/head'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Discord } from 'components/Icons'
import NavLink from 'components/NavLink'

import { data } from 'data'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  let router = useRouter()
  let [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    setIsFirstRender(false)
  }, [])
  if (!router.isReady || isFirstRender) {
    return null
  }

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-gray-100">
        <div className="hidden overflow-y-scroll p-3 space-y-2 bg-gray-900 md:block scrollbar-hide">
          <NavLink href="/">
            <Discord className="w-7 h-5" />
          </NavLink>

          <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

          {data.map((server) => (
            <NavLink
              href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
              active={+router.query.sid! === +server.id}
              key={server.id}
            >
              <Image
                src={`/servers/${server.img}`}
                alt={server.label}
                width={48}
                height={48}
                placeholder="blur"
                blurDataURL={`/servers/${server.img}`}
              />
            </NavLink>
          ))}
        </div>

        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
