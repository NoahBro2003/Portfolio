import http from "../axiosAPI"


export const getAllTemoignage = async (params = {}) =>{
    const temoignages = await http.get('/temoignage', {params: {...params}})
    return temoignages.data.data
}

export const getTemoignage = async id =>{
    const temoignage = await http.get(`/temoignage/${id}`)
    return temoignage.data.data
}

export const updateTemoignage = async (id, temoignage) =>{
    const updatedTemoignage = await http.put(`/temoignage/${id}`, temoignage)
    return updatedTemoignage.data
}

export const deleteTemoignage = async id =>{
    const deletedTemoignage = await http.delete(`/temoignage/${id}`)
    return deletedTemoignage.data
}

export const addTemoignage = async user =>{
    const addedTemoignage = await http.post(`/temoignage`, user)
    return addedTemoignage.data
}