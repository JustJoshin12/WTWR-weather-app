const baseUrl = 'http://localhost:3001';

export const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };

export const getItems = () => {
    return fetch(`${baseUrl}/items`, {
        method: "GET",
    }).then((res) => {
        return checkResponse(res);
    })
}

export const addItems = ({name,imageUrl,weather}) => {
    return fetch(`${baseUrl}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:name,
            imageUrl: imageUrl,
            weather: weather,
        })
    })
}

export const deleteItem = (selectedCard) => {
    return fetch(`${baseUrl}/items/${selectedCard._id}`, {
        method: "DELETE",
    }).then((res) => {
        return checkResponse(res)
    })
}