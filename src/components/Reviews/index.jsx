import Image from 'next/image'
import styles from './styles.module.scss'
import Stars from '@/UI/Stars/Stars'
import { useEffect, useState } from 'react'

const reviews = [
  {
    avatar: '/avatar1.png',
    name: 'Clara Souza',
    roel: 'Programadora',
    stars: 5,
    comment: 'Eu simplemente adorei o café daqui! O ambiente é acolhedor e os funcionários são super atenciosos.'
  },
  {
    avatar: '/avatar2.png',
    name: 'João Souza',
    roel: 'Designer',
    stars: 4,
    comment: 'Adore o café! É sem dúvida o melhor da cidade. Recomendo a todos que queiram uma expreriência única e insesquecível.'
  },
  {
    avatar: '/avatar3.png',
    name: 'Maria Silva',
    roel: 'Engenheira',
    stars: 3,
    comment: 'O café e bom, mas acho que poderia ter mais opções de acompanhamentos, como bolo e pães.'
  },
]

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  function nextReview() {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1)
  }

  function previousReview() {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1)
  }

  useEffect(() => {
    const interval = setInterval(nextReview, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [currentReview])

  const { avatar, name, role, stars, comment } = reviews[currentReview]

  return (
    <section className={styles.reviews} id='depoimentos'>

      <Image
        className={styles.image}
        src='/graos.png'
        alt='graos de cafe'
        width={425}
        height={250}
      />
      <h2 className='title light-bg'>O que falam da gente</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>&larr;</button>
        <Image
          className={styles.avatar}
          src={avatar}
          alt='avatar'
          width={120}
          height={120}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Stars stars={stars} />
        <p>
          {comment}
        </p>
        <button className={styles.next} onClick={nextReview}>&rarr;</button>
      </div>
    </section>
  )
}

export default Reviews