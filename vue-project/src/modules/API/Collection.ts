

export async function getCollections() {
    const url = `http://localhost:3000/collection`;

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

export async function getCollectionsById(id:number) {
    const url = `http://localhost:3000/collection/` + id;

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

export async function deleteCollection(id:number) {
    const url = 'http://localhost:3000/collection/' + id;

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