"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import Header from "./components/Header";
import "./globals.css";

const query = gql`
  query getAllPosts {
    posts {
      nodes {
        title
        content
        uri
        date
      }
    }
  }
`;

const Home = () => {
  const { data } = useSuspenseQuery(query);
  return (
    <section className="relative h-screen  w-full bg-[url('https://i.imgur.com/rx17vHF.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="absolute flex h-full w-full flex-col backdrop-brightness-50">
        <Header />
        <div className="container mx-auto mb-20 flex max-w-screen-xl flex-grow flex-col items-center justify-center gap-10 text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Lorem ipsum dolor sit.
          </h1>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            saepe.
          </h2>
          <button className="hover:bg-black rounded border-2 border-white px-7 py-3 text-sm font-medium uppercase leading-snug text-white">
            Zobacz nasze menu
          </button>
        </div>
      </div>
    </section>
  );

  // return (
  //   data.posts.nodes.map(obj=>{
  //     return (
  //       <div>{obj.title}</div>
  //     )
  //   })
  // )
};

export default Home;
