import Product from '../Product'
import styles from './styles.module.scss'


const Products = () => {
  return (
    <section className={styles.products} id='products'>


      <Product product='1' title='Café blend' roast='Torra Escura' stars='5' reviews='16' price='29.90' />

      <Product product='2' title='Café branco' roast='Torra Clara' stars='4' reviews='33' price='28.49' />

      <Product product='3' title='Café premium' roast='Torra Média' stars='5' reviews='4' price='32.90' />

      <Product product='4' title='Café Latte' roast='Torra clara' stars='5' reviews='6' price='23.90' />
    </section>
  )
}

export default Products