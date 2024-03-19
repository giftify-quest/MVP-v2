import Image from "next/image";
import styles from "./page.module.scss";
import { SectionTitle } from "@/components/section-title/SectionTitle";

export default function Home() {
  return (
    <main className={styles.main}>{/* <SectionTitle></SectionTitle> */}</main>
  );
}
