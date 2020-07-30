new Promise((resolve, reject) => {
  console.log("in a promise");
  resolve("hi");
}).then((data) => {
  console.log(data)
  return new Promise((resolve, reject) => { 
    console.log('second promise')
    throw "ERROR in then"
  })
})
.catch(err => {
  console.log(err)
})
console.log("1111")
