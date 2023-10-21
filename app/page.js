const gql=String.raw

const fetchPosts =async ()=>{
  const res = await fetch("http://localhost:3000/api/graphql",{
    cache:'no-cache',
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      query:gql`
      query Query {
        getProducts {
          id
          title
        }
      }`
    })
  });
  const response =await res.json()
  console.log(response.data.getProducts)
  return response.data.getProducts

}

export default async function Home() {
 const posts = await fetchPosts()
 console.log("posts",posts);
return (
 <div>
     posts
     {posts.map((post)=>{
         return (
      <>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.FatherName}</p>
      <p>{post.class}</p><p>{post.semester}</p>
      <hr />
      </>
         )
})}
 </div>
)
}

