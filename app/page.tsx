"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql`query getAllPosts {
  posts { 
    nodes {
      title
      content
      uri
      date
    }
  }
}`

const Home = () => {
  const {data} = useSuspenseQuery(query);

  return (
    data.posts.nodes.map(obj=>{
      return (
        <div>{obj.title}</div>
      )
    })
  )
}

export default Home;