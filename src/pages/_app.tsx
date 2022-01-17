import type { AppProps } from 'next/app'
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Discord } from "components/Icons";
import NavLink from 'components/NavLink';

import { data } from "../../data";

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  let router = useRouter();
  let [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  if (!router.isReady || isFirstRender) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-gray-100">
        <div className="hidden p-3 space-y-2 overflow-y-scroll scrollbar-hide bg-gray-900 md:block">
          <NavLink href="/">
            <Discord className="h-5 w-7" />
          </NavLink>

          <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />

          {data.map((server) => (
            <NavLink
              href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
              active={+router.query.sid! === +server.id}
              key={server.id}
            >
              <img src={`/servers/${server.img}`} alt="" />
            </NavLink>
          ))}
        </div>

        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;