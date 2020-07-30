try {
    const response = await fetch(url, {})
    const json = await response.json()
    console.log(json)
} catch (e) {

}

function test(){
    return new Promise((resolve, reject)=>{
        ..
    })
}