var storage={
    set(key,value){
      sessionStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
      return  JSON.parse(sessionStorage.getItem(key));
    }
}
export default storage;