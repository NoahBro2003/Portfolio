import http from "../axiosAPI"


export const getAllUsers = async (params = {}) =>{
    const users = await http.get('/users', {params: {...params}})
    return users.data.data
}

export const getUser = async id =>{
    const user = await http.get(`/users/${id}`)
    return user.data.data
}

export const updateUser = async (id, user) =>{
    const updatedUser = await http.put(`/users/${id}`, user)
    return updatedUser.data
}

export const deleteUser = async id =>{
    const deletedUser = await http.delete(`/users/${id}`)
    return deletedUser.data
}

export const addUser = async user =>{
    const addedUser = await http.post(`/users`, user)
    return addedUser.data
}