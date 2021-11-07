import Head from 'next/head'
import Style from "../styles/Layout.module.css"

const help_lines = () => {
return(
    <>
    <head>
        <title>Anxiety- Help List </title>
    </head>
    <div> 
        <h1>List of help lines and resources for Anxiety(links)</h1>
        <ul className="ul">
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2940247/">The Relationship Between Anxiety Disorders and Suicide Attempts</a></li>
        <li><a href="https://medlineplus.gov/anxiety.html">Anxiety: Medline Plus</a></li>
        <li><a href="https://adaa.org/tips">Tips to Manage Anxiety and Stress</a></li>
        <li><a href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961">Anxiety Disorders - Mayo Clinic</a></li>
        <li><a href="https://www.hhs.gov/answers/mental-health-and-substance-abuse/what-are-the-five-major-types-of-anxiety-disorders/index.html">Five Major types of anxiety disorders</a></li>
        </ul>
    </div>
    <div className={Style.Link}>
            <a href="/">Click to go home</a>
    </div>
    </>
)
}

export default help_lines