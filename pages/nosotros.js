import Layout from "@/components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, guitarLA, tienda'}
    >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>
              <Image src= "/img/nosotros.jpg" width={1000} height={800} alt = 'imagensobre nosotros' />    

              <div>
                <p> Pellentesque sollicitudin nisi orci, facilisis mattis diam hendrerit ut. Nulla imperdiet suscipit erat, vitae blandit mauris imperdiet vel. Vivamus sit amet enim tortor. Donec dignissim sapien lorem. Donec interdum tortor in porta mattis. Sed cursus varius massa et lobortis. In ultricies lectus turpis, quis fermentum tortor bibendum id.</p>

                <p> Pellentesque sollicitudin nisi orci, facilisis mattis diam hendrerit ut. Nulla imperdiet suscipit erat, vitae blandit mauris imperdiet vel. Vivamus sit amet enim tortor. Donec dignissim sapien lorem. Donec interdum tortor in porta mat. Sed cursus varius massa et lobortis. In ultricies lectus turpis, quis fermentum tortor bibendum id.</p>
              </div>
            </div>
        </main>
    </Layout>
  )
}

