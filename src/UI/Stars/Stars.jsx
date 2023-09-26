import Image from 'next/image'
import styles from './Stars.module.scss'



const Stars = ({ stars, reviews }) => {

  const rendenStars = Array.from({ length: stars }, (_, index) => <Image key={index} src='/star.svg' alt='estrelas' width={14} height={14} />)

  return (
    <div className={styles.stars}>
      {rendenStars}
      {reviews && <span>({reviews})</span>}
    </div>
  )
}

export default Stars