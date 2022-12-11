import Link from 'next/link';
import styles from './Tours.module.scss';


export default function Tours({ tours }) {
  return (
    <div className={styles.grid}>
      {tours?.map((tour) => (
        <Tour tour={tour} />
      ))}
    </div>
  );
}

export function Tour({ tour }) {
  return (
    <Link href="/" className={styles.card}>
      <h3>{tour.name}</h3>
      <section>
        <i>{tour.date}</i>
        <p>{tour.place}</p>
      </section>
      {/* <article>
        {tour.route.map((way) => (
          <p>{way.place}</p>
        ))}
      </article> */}
    </Link>
  );
}
