import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninijas</h1>
      {ninjas.map(({ name, id }) => (
        <div key={id}>
          <a className={styles.single}>
            <h3>{name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Ninjas
