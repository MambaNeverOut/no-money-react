let id = 0
class createID{
  value: number
  constructor(){
    id += 1
    this.value = id
  }
  addOneHundred(){
    return this.value += 100
  }
}

export { createID}