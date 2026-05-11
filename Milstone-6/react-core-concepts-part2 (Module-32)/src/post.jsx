import { use } from "react"
import Post from "./posts";

export default function Post({ postsPormise }) {

  const posts = use(postsPormise);
  console.log(posts);
  
  return (
    <div className="cad">
      <h2>All post are here : {posts.length}</h2>
      {
      Post.map(<posts Post={Post}></posts>)
      }
    </div>
  )
}