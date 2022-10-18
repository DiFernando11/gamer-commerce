
let toCapitalize= (str)=>{
    let strCheck= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return strCheck

}


module.exports={
    toCapitalize
}