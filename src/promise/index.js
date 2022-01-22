/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHapped = () => {
    return  new Promise((resolve, reject)=>{
        if (true) {
            resolve('Hey!');
           
        } else {
            reject('Whoops!');//error programado
        }
    });
    
};

somethingWillHapped()
  .then( response => console.log(response))
  .catch( err => console.log(err));

  //exercise two
const somethingWillHapped2=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            },2000);
        }else{
            const error = new Error('Whoops2');//Detalla el origen del error
            reject(error);
        }
    });
}

somethingWillHapped2()
    .then(response=>console.log(response))
    .catch(err=>console.error(err));

//Ejecuta varias promesas al mismo tiempo
Promise.all([somethingWillHapped(), somethingWillHapped2()])
    .then(response=>{
        console.log('Array of results', response);
    })
    .catch(err=>{
        console.error(err);
    })



