

export async function getCategorys() {
    const url = `http://localhost:3000/category`;

    try {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error
            });
    }
    catch (error) {
        return error;
    }

}

export async function deleteCategory(id:number) {
    const url = 'http://localhost:3000/category/' + id;

    try {
        return await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error
            });
    }
    catch (error) {
        return error;
    }

}