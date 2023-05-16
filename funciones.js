export function construirYoutube(datos) {

    const BuscarDescripcion = async (videoId) => {
        let url = `https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'aaae3ef658msh451c8cdc3dc7901p195a71jsna3ed1b1c302a',
                'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            construirYoutubeDescription(result);

        } catch (error) {
            console.error(error);
        }
    }
    const BuscarComentarios = async (videoId) => {
        let url = `https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'aaae3ef658msh451c8cdc3dc7901p195a71jsna3ed1b1c302a',
                'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            construirYoutubeComentarios(result);

        } catch (error) {
            console.error(error);
        }
    }
    //Id del Video
    let videoId = datos.contents[0].video.videoId;
    BuscarDescripcion(videoId);         //busca la descripción
    BuscarComentarios(videoId);         //busca los comments
    //Titulo del Video
    let titulo = datos.contents[0].video.title;
    //Sugerencias
    let videorelacionado1 = datos.contents[1].video.videoId;
    let videorelacionado2 = datos.contents[2].video.videoId;
    let videorelacionado3 = datos.contents[3].video.videoId;
    //Avatar
    let avatar = datos.contents[0].video.author.avatar[0].url;
    //Nombre
    let nombre = datos.contents[0].video.author.title;

    document.querySelector(".video").innerHTML = `<iframe width="900" height="500" src="https://www.youtube.com/embed/${videoId}" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`;
    document.querySelector(".video-relacionado-1").innerHTML = `
                         <iframe width="300" height="150" src="https://www.youtube.com/embed/${videorelacionado1}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>`
    document.querySelector(".video-relacionado-2").innerHTML = `
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/${videorelacionado2}"
                       title="YouTube video player" frameborder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowfullscreen></iframe>`
    document.querySelector(".video-relacionado-3").innerHTML = `
                       <iframe width="300" height="150" src="https://www.youtube.com/embed/${videorelacionado3}"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>`

    document.getElementById("title").innerHTML = `<h1>${titulo}</h1>`;
    document.getElementById("avatar").innerHTML = ` <div><img src="${avatar}" alt=""></div>`
    document.getElementById("nomb").innerHTML = ` <div><h3>${nombre}</h3></div>`
};

function construirYoutubeComentarios(datos) {
    document.querySelector(".comentarios").innerHTML = `
    <h2>Comentarios</h2>
    <li><b>${datos.comments[0].author.title}</b>: ${datos.comments[0].content}</li>
    <li><b>${datos.comments[1].author.title}</b>: ${datos.comments[1].content}</li>
    <li><b>${datos.comments[2].author.title}</b>: ${datos.comments[2].content}</li>
    <li><b>${datos.comments[3].author.title}</b>: ${datos.comments[3].content}</li>
    <li><b>${datos.comments[4].author.title}</b>: ${datos.comments[4].content}</li>
    <li><b>${datos.comments[5].author.title}</b>: ${datos.comments[5].content}</li>
    <li><b>${datos.comments[6].author.title}</b>: ${datos.comments[6].content}</li>`;
};

function construirYoutubeDescription(datos) {
    document.querySelector(".descripcion").innerHTML = `
    <h2>Descripción del video</h2>
    ${datos.description}`;
};

