'use client';

import Head from 'next/head'

export default function Home() {
    return (
        <div className={'flex flex-col h-screen'}>
            <Head>
                <title>Awesome App</title>
                <meta name="description" content="To be built awesome app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-1 w-4/5 md:w-3/5 items-center justify-center flex-col gap-8 mx-auto my-10 font-sans">
                <p className="font-sans text-center">You can find your API key at https://platform.openai.com/account/api-keys</p>
            </main>
            <footer className="w-full mx-auto my-4 font-sans text-center text-sm text-slate-700 py-4">
                Made by <a className="text-blue-600" href="https://twitter.com/0xlkda">0xlkda 🚀</a>. Open sourced at <a className="text-blue-600" href="https://github.com/0xlkda/">GitHub</a>.
            </footer>
        </div>
    )
}
