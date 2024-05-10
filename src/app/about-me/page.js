import styles from "../page.module.css";

export default function Home() {

  styles.main += " col"

  return (
    <main className={styles.main}>
      Hi!
      <br/>
      I'm Axa, a 26 year old Seattle resident.
      <br/>
      For the past 4-5 years, I have been working in gyms, both as front desk staff and as a certified personal trainer.
      <br/>
      <br/>
      In 2023 I made the decision to pursue software engineering.

      <br/>
      <br/>
      In my spare time I enjoy playing video games, learning piano, riding motorcycles, and lifting weights.

    </main>
  );
}
