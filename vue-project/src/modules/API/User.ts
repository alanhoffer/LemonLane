export async function createUser(user: any) {

    const userData = JSON.stringify(user);
    const url = 'http://localhost:3000/auth/register';
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }
            return response;
        })
        .then((data) => {
            console.log('Respuesta del servidor:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

export async function getUsers(page: number, quantity?: number) {
    const url = `http://localhost:3000/user?page=${page}&perPage=${quantity}`;

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

export async function deleteUser(id: number) {
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