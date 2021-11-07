import Head from 'next/head'
import Styles from '../styles/Layout.module.css'
import Link from 'next/head'
import 'animate.css';
export default function Home() {
  return (
    <>
    <head>
    <script src="https://kit.fontawesome.com/822d056e01.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
    </head>
    <div>
      <div className={Styles.welcome}>  <h1 className={Styles.welcome_text}  class="animate__bounce animate__animated"><a href="#learn">Learn More <i class="fas fa-chevron-down"></i></a></h1></div>
      
      <div className={Styles.learn_more} id="learn">
      <div className={Styles.grid_container}>
      <div className={Styles.box1}>
      <a href="/what_is_anxiety"><img src="icon(1).png" alt="What is Anxiety"></img><br />
        What is Anxiety?</a>
      </div>
      <div className={Styles.box2}>
      <a href="/anxiety_disorder"><img src="icone(2).png" alt="Anxiety Disorders"></img><br />
        Anxiety Disorders</a>
       
      </div>
      <div className={Styles.box3}>
      <a href="/symptoms_anxiety_disorder"><img src="icon(4).png" alt="Anxiety Disorders"></img><br />
        Syptoms of Anxiety Disorder</a>
       
      </div>
      <div className={Styles.box4}>
      <a href="/anxiety_treatment"><img src="icon(5).png" alt="Anxiety Disorders"></img><br />
        Treatment</a>
       
      </div>

      </div>
      </div>   
      <div className={Styles.truth}>
        <h1><a href = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2940247/#:~:text=Results,%25%20CI%3A%201.40–2.08)" target="_blank" rel="noopener noreferrer">Anxiety Kills: 70% of Suicide cases are related to an Anxiety Disorder</a> </h1>
      </div>
      <div>
        <h1><a className={Styles.otherButton}href="/help_lines">Links to other resources and sources of reference</a></h1>
      </div>
      <div className={Styles.Gform}>
        <h1 className={Styles.Gform_text}>StopAnxiety is a school project of mine. If you have time please fill out the form below for the project. Thank You :)</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGrFX2qFAwITECWrzXIMmZTPbaj7E7Rtza6sDNxpBAdADi8A/viewform?embedded=true" width="640" height="1116" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe
        ></div>
        </div>

    </>
  )
}
