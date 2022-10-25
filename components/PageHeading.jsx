import {pageHeadingStyles} from "./pageheading.module.scss"

function PageHeading({title, tagline, children, ... props}){
    return (
        <header className={pageHeadingStyles}>
            <h1>{title}</h1>
            <p>{tagline}</p>
        </header>

    )
}

export default PageHeading