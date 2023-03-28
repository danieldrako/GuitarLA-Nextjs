import Layout from "@/components/layout"
import Post from "@/components/post"
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {

  console.log(posts)
  return (
    <Layout
        title={'Blog'}
        description={'Blog de musica, consejos GuitarLA'}
    >
        <main className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post =>(
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

//estatico
export async function getStaticProps(){//!si se modifican los datos, estos no se actualizan al instante, se necesita hacer otro build, la informacion no  va a ser dinamica
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()
  return {
    props: {
      posts
    }
  }
}
