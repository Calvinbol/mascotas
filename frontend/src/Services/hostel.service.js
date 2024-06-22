import { api } from "./config"


export async function getMyProfileContext() {
    try {
        const { data } = await api.get('/hostel/myprofile', {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        })
        return data
    } catch (error) {
        throw new Error(error)
    }
}