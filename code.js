const d = document,
    $main = d.querySelector('main');

d.addEventListener("DOMContentLoaded", (e)=>{

    fetch("assets/home.html",{
        method:"GET",
        'Content-Type': 'text/html'
    })
    .then((res)=>{
        return res.ok?res.text():Promise.reject(res);
    })
    .then((res2)=>{
        $main.innerHTML=res2;
    })
    .catch((err)=>{
        $main.innerHTML=` Error ${err.status}: ${err.statusText || "Ha ocurrido un error"}`;
    });

})

d.addEventListener("click", (e)=>{

    if(e.target.matches(".menu a")){
        e.preventDefault();

        fetch(`${e.target.href}`,{
            method:"GET",
            'Content-Type': 'text/html'
        })
        .then((res)=>{
            return res.ok?res.text():Promise.reject(res);
        })
        .then((res2)=>{
            $main.innerHTML=res2;
        })
        .catch((err)=>{
            $main.innerHTML=` Error ${err.status}: ${err.statusText || "Ha ocurrido un error"}`;
        });

    }

})