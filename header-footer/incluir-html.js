document.addEventListener("DOMContentLoaded",(e)=>{

    const incluirHTML = (el, url) =>{
        fetch(url, {
            method:"GET",
            'Content-type':'text/html'
        })
        .then((res)=>{
            return res.ok?res.text():Promise.reject(res);
        })
        .then((res2)=>{
            el.outerHTML=res2;
        })
        .catch((err)=>{
            el.outerHTML=`Error ${err.status}: ${err.statusText || "Ha ocurrido un error al cargar los datos, vefirica si estas haciendo bien la peticion"}`
        });
    }

    document.querySelectorAll('[data-include]').forEach((el)=> incluirHTML(el,el.getAttribute("data-include")));
})