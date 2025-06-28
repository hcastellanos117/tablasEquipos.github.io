import indexData from './pages/home';
import galeriaData from './pages/galeria';
import equiposData from './pages/equipos';

function context(page){
    console.log("Getting context for: " + page);
    let context = {
        title: "Mi Sitio ABC",
    }
    switch(page){
        case "/index.html":
            context = {...context, ...indexData};
            break;
        case "/galeria.html":
            context = {...context, ...galeriaData};
            break;
        case "/equipos.html":
            context = {...context, ...equiposData};
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}

export default context;
