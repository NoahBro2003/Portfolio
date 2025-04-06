import http from "../axiosAPI"


export const getAllTemoignage = async (params = {}) =>{
    const users = await http.get('/temoignage', {params: {...params}})
    return users.data.data
}

export const getTemoignage = async id =>{
    const user = await http.get(`/temoignage/${id}`)
    return user.data.data
}

export const updateTemoignage = async (id, user) =>{
    const updatedUser = await http.put(`/temoignage/${id}`, user)
    return updatedUser.data
}

export const deleteTemoignage = async id =>{
    const deletedUser = await http.delete(`/temoignage/${id}`)
    return deletedUser.data
}

export const addTemoignage = async user =>{
    const addedUser = await http.post(`/temoignage`, user)
    return addedUser.data
}