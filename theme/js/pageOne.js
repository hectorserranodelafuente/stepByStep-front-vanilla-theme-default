 async function getYogaList(){
    const response = await fetch(`http://127.0.0.1:3000/incrementalApi/yogaDisciplines`)

    const data = await response.json()

    let content = data.candidates[0].content.parts[0].text
    
    JSON.parse(content).forEach((yogaDiscipline)=>{
        console.log(JSON.stringify(yogaDiscipline))
        
        let entity = `<div style="padding:20px;border:solid 1px;">
                        <div style="background-color:#9bff99;">${yogaDiscipline.title}</div>
                        <div >${yogaDiscipline.description}</div>
                        </div>`
        content += entity
    
        })
                                                                        
        
        console.log(content)
    
    document.getElementById("yogaDisciplinesList").innerHTML= content

    //console.log(`Response ${response}`)
 }

getYogaList()
