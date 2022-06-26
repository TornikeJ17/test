import axios from 'axios';


const Images = async () => {
    try {
        const { data } = await axios.get(`https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json`)
        return data
    } catch (error) {
        return error
    }
}

export {
    Images
}