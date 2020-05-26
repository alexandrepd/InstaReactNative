const imgLike = (curtiu) => {
    if (curtiu)
        return require("../../res/img/s2-checked.jpg");
    else
        return require("../../res/img/s2.jpg");
}

const curtirFoto = (curtiu, likes) => {
    let qtde = likes;

    if (curtiu) {
        qtde--;
    } else {
        qtde++;
    }

    return [!curtiu, qtde]
}

export { imgLike, curtirFoto }
