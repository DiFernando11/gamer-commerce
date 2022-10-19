export const validateDate = (date) =>{
    const arrayDate = date.split('-')
    if(arrayDate[0] < 1980 || arrayDate[0] > 2021){
        return true;
    }

}
