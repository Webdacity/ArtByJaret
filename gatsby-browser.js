import LoaderStyles from "./src/styles/components/page-loader.module.scss";

export const onInitialClientRender = () => {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("noscroll");
    document.getElementById("page-loader").classList.add(LoaderStyles.fade);
    setTimeout(function () {
        document.getElementById("page-loader").classList.remove(LoaderStyles.fade);
        document.getElementById("page-loader").classList.add(LoaderStyles.hidden);
    }, 1000);
}

export const onClientEntry = () => {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("noscroll");
}