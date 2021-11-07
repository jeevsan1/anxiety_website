import Head from "next/head"
import Link from "next/link"
import Style from "../styles/Layout.module.css" 

const about = () => {
    return (
        <>
        <head>
            <title>StopAnxiety - About</title>
        </head>
        <div className="bgdiv">
        <div>
    <h1 className={Style.welcome}>About</h1>
    <div className={Style.description}>StopAnxiety is a website meant to be a good starting point for those who think they are suffering from Anxiety disorders <br /> This is a place to understand Anxiety more and also the way to cope. <br /> It's also a hub for other resources <br /> To summarize StopAnxiety ws built as a base for baseline information about Anxiety and a way to let people branch out</div>
        </div>
        <div className={Style.Link}>
            <a href="/">Click to go home</a>
        </div>
        </div>
        </>
    )
}

export default about
