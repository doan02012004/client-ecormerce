export const uploadImage = async (file: File) => {
    try {
        const formData = new FormData()
        formData.append('image', file)
        const res = await fetch(`http://localhost:8000/api/v1/images/upload`, {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}