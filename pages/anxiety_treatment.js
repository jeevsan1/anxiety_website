import Head from 'next/head'
import Link from 'next/link'
import Style from '../styles/Layout.module.css'
import Image from 'next/dist/client/image'

const anxiety_treatment = () => {
    return (
        <>
        <head>

        </head>
        
         <div className={Style.anxiety_disorder}>
            <h1> Here are a list of symptoms that are caused by Anxienty Symptoms:</h1>
            <h1> <ul>
                <li>Pyscotherapy- Despite the creepy name psycotherapy is just talking to someone generally a counsler to improve one Anxiety disorder</li>
                <li>Medications- Certain Antidepressants</li>              
                </ul></h1>
            <h1><a href="pdf.pdf" download className={Style.Link}>Download</a> a free pdf for Coping skills with Anxiety!</h1>
        <img src="img(5).jpg" alt="Anxiety"></img>
        </div>
        <div className={Style.Link}>
                <Link href="/" className="animate__animated animate__bounce">Click to go home</Link>
        </div>   
        
        </>
    )
}

export default anxiety_treatment
