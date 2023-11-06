import axios from "axios";

export const getInfo = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/pets`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}