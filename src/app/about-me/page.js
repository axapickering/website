import styles from "../page.module.css";

export default function Home() {

  styles.main += " col";

  return (
    <main className={styles.main}>

      <div className="about-me-content">

        <img src="axa_rithm_pic.jpg" className="headshot" />


        <p className="about-me-text">
          I'm Axa, a 26 year old Seattle resident.
          <br /><br />
          In 2023 I made the decision to pivot from personal training to software engineering.
          <br />
          September 2023 - January 2024 I attended <a href="https://www.rithmschool.com/">Rithm School</a>, a remote 17-week full stack software engineering immersive.
          <br /><br />
          After acquiring hands on experience building applications, I am now seeking an entry level/junior software engineer role
        </p>

        <ul className="like-list">
          In my spare time I enjoy :
          <li>Learning piano - I have been practicing piano for about one month and it has been a great creative outlet.</li>
          <li>Riding my motorcycle - I have an old GS1200 adventure bike. Great way to make a commute fun.</li>
          <li>Lifting weights - Even before I was a personal trainer, I fell in love with the gym and the way it allows me to challenge myself</li>
        </ul>

      </div>
    </main>
  );
}
