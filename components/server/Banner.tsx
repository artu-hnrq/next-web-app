import Image from 'next/image'
import styles from './Banner.module.scss'
import { WindowCssPropertyConsumer } from "@client-components";


export default function Banner({ children }) {
  return (
      <>
          <WindowCssPropertyConsumer/>
          <div className={styles.banner}>
              <Image
                  src='/starry-sky.png'
                  alt='starry-sky'
                  width={2245}
                  height={1587}
              />

               <Image
                    src='/favicon.png'
                    alt="nave-trance"
                    className={styles.logo}
                    height={100}
                    width={100}
               />

              <section>
                  {children}
              </section>
          </div>
      </>
  );
}
