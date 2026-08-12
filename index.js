const promise = new Promise((resolve, reject) => {
    ischoleKuclche = false;
    if(ischoleKuclche){
        resolve("khao tu khao");
    }else{
        reject("mazak nai");
    }
})

.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})