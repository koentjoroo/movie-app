import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-full container mx-auto text-center p-8">
      <Head>
        <title>Meow!</title>
      </Head>
      <h1 className="font-heading leading-relaxed text-2xl text-slate-900">
        Cat Ipsum meow meow
      </h1>
      <p className="mx-auto max-w-prose text-slate-700">
        Purr while eating going to catch the red dot today going to catch the
        red dot today so pelt around the house and up and down stairs chasing
        phantoms.{" "}
      </p>
    </div>
  );
};

export default Home;
