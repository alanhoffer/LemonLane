

export async function getUsers() {
    const url = 'http://localhost:3000/user';

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

export async function deleteUser(id:number) {
    const url = 'http://localhost:3000/user/' + id;

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