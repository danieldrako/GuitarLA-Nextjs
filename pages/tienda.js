import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {


  return (
    <Layout
        title={'Tienda'}
        description={'Tienda virtual, venta de instrumentos'}
    >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>

          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>



        </main>
    </Layout>
  )
}

//estatico
// export async function getStaticProps(){//!si se modifican los datos, estos no se actualizan al instante, se necesita hacer otro build, la informacion no  va a ser dinamica
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }

//dinamico
export async function getServerSideProps(){//!La informacion es lo más nuevo posible
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}

