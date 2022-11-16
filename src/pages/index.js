import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import ExperienceWrapper from '../components/ExperienceWrapper';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>PROJECT LOREM</h1>

                <ExperienceWrapper />
            </main>

            <footer className={styles.footer}>{/* footer component */}</footer>
        </div>
    );
}
