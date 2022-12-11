import Image from 'next/image'
import styles from './Logo.module.scss'

export default function Logo({ height = 100, width = 100}){
    return (
        <Image 
            src='/favicon.png'
            alt="nave-trance"
            className={styles.logo}
            height={height}
            width={width}
        />
    )
}