export function set(name, value, options={session: true, maxage: 0}){
  let cache;
  
  if(options.session){
    cache=sessionStorage
  }else{
    cache=localStorage
  }

  cache[name]=JSON.stringify({
    value,
    expires: options.maxage+Math.floor(Date.now()/1000)
  })
}

export function get(name){
  let obj=sessionStorage[name]||localStorage[name];
  try{
    obj=JSON.parse(obj);
  }catch(err){
    return null
  }
  if(!obj) return null;
  if(obj.expires<Date.now()/1000){
    return null;
  }else{
    return obj.value
  }
}