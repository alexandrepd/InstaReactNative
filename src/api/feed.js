const lerFotos = async (callBack) => {
    const fotosHTTP = await fetch("http://10.0.2.2:3030/feed");
    const fotosJson = await fotosHTTP.json();
    callBack(fotosJson);
}

export default lerFotos;