import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          maiores fugit ratione maxime ad molestiae assumenda deserunt aut eaque
          esse rerum, doloremque suscipit officiis minus, aperiam consectetur
          facere! Eius, officiis.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non
          amet aperiam nihil mollitia omnis autem cupiditate! Reprehenderit
          dolor quos quas provident illo quia minus adipisci nulla, dolore
          tempore similique!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
