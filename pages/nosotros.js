import Layout from "@/components/layout"
import Link from "next/link"

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda'}
    >
        <h1>Desde nosotros js</h1>
        <Link href = "/">Inicio</Link>
    </Layout>
  )
}

