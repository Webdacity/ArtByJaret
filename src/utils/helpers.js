const convertImage = (image, width) => {
    image = image.replace("upload/v", `upload/w_${width}/f_auto/v`);
    return image
}

export {
    convertImage
}