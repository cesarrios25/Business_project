export const baseURl = `http://localhost:4000`

export const getData = async function (endpoint){
    const response = await fetch(`${baseURl}/${endpoint}`)
    
    return  response.json()
}

// export const getDataById = async function (endpoint, id){
//     const response = await fetch(`${baseURl}/${endpoint}/${id}`)
    
//     return  response.json()
// }

export const sendData = async function (endpoint,data){
    const response = await fetch(`${baseURl}/${endpoint}`,{
        "method": "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const deleteData = async function (endpoint,id){
    const response = await fetch(`${baseURl}/${endpoint}/${id}`,{
        "method": "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return true
}

export const patchData = async function (endpoint, id, data){
    const response = await fetch(`${baseURl}/${endpoint}/${id}`, {
        "method": "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()

}