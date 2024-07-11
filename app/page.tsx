import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
        <p className="fixed right-12 top-20 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 box-border h-15 w-36 text-center;">
          Hi, this is the CHC website
        </p>
      </div>
      <h6 className="text-7xl">
        {" "}
        Not just comics, <br /> It&#39;s{" "}
        <span className="font-style: italic font-black">CHZ comix</span>{" "}
      </h6>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[&#39;&#39;] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic  after:blur-2xl after:content-[&#39;&#39;] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
        <a
          href="/store"
          className="group rounded-lg border-2 border-red-500  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-red-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Store{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find all of our comics, top trumps etc.
          </p>
        </a>

        <a
          href="https://github.com/hiro-water/CHL-website"
          className="group rounded-lg border-2 border-orange-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Our code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Our code is open-source
          </p>
        </a>

        <a
          href="/history"
          className="group rounded-lg border-2 border-sky-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-sky-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Our history{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore our story
          </p>
        </a>

        <a
          href="/contact-us"
          className="group rounded-lg border-2 border-purple-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-purple-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            We will answer every question you throw at us
          </p>
        </a>
      </div>
      <div className="relative flex place-items-left before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[&#39;&#39;] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[&#39;&#39;] before:dark:bg-gradient-to-br before:dark:from-transparent  before:dark:opacity-10  after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative position: absolute; bottom: 0; left: 0; dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/DW productions.png"
          alt="DW Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <a
        href="/admin"
        className="group rounded-lg border-2 border-zink-950 px-5 py-4 transition-colors hover:border-zink-950 hover:bg-slate-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>ADMIN</h2>
      </a>
    </main>
  );
}
