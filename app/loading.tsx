'use client';

import { CircularProgress } from "@mui/material";
import styles from './page.module.scss'


export default function SimpleBackdrop() {
  return (
    <main className={styles.main}>
        <CircularProgress color="inherit" />
    </main>
  );
}