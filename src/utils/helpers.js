import LoaderStyles from "../styles/components/page-loader.module.scss";


export const convertImage = (image, width) => {
    image = image.replace("upload/v", `upload/w_${width}/f_auto/v`);
    return image
}

export const hideLoader = () => {
    document.getElementById("page-loader").classList.add(LoaderStyles.fade);
    setTimeout(function () {
        document.getElementById("page-loader").classList.remove(LoaderStyles.fade);
        document.getElementById("page-loader").classList.add(LoaderStyles.hidden);
    }, 1000);
}