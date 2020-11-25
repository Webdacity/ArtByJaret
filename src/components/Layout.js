import React from "react";

// Components
import Head from "../components/Head";
import Landing from "../components/Landing";

const Layout = (props) => {
    return (
        <>
            <Head pageMeta={props.pageMeta} />
            <Landing {...props} />
            <main className={props.pageName}>
                {props.children}
            </main>
        </>
    )

}

export default Layout