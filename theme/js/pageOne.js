 async function getYogaList(){
    const response = await fetch(`http://127.0.0.1:3000/incrementalApi/yogaDisciplines`, {
            method:'GET',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({tokenSession })
    })

    console.log(`Response ${response}`)
 }

 getYogaList()
