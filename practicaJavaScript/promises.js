const promesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(2);
      if(p1){
      resolve(p1);
      }else{
        reject("error está vacio")
      }
    }, 2000);
});

promesa.then((heroe) => {
    console.log("Then de la promesa", heroe)
}).catch(err => console.warn(err))

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve,reject) => {
        setTimeout(() => {
          const p1 = getHeroeById(id);
          p1 ? resolve(p1) : reject("error está vacio");

        }, 2000);
    });
}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn)