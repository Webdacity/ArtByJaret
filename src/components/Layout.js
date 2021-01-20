import React from "react";

// Components
import Head from "../components/Head";
import Landing from "../components/Landing";
// import PageLoader from "./PageLoader";

const Layout = (props) => {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            {props.landing ? <Landing {...props.landing} /> : null}
            <main className={props.pageName}>
                {props.children}
            </main>
        </>
    )

}

export default Layout