let id = parseInt(window.localStorage.getItem('idMax') || '0')
const createId = ()=>{
  id += 1
  console.log(id);
  
  window.localStorage.setItem('idMax',JSON.stringify(id))
  return id
}
export {createId}