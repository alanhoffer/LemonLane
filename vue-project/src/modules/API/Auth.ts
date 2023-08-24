import router from "@/router";

export const AuthCheck = () => {
    let email = localStorage.email;
    if(email){
        return true
    }
    else{
        return false
    }

}

export const logout = () => {
    router.push('/')
    localStorage.removeItem('email');
}

export const login = (email:string, password:string) => {
    
    const url = 'http://localhost:3000/auth/login'; // URL del endpoint
    const data = {email: email, password: password}; // Datos a enviar en la solicitud
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Procesar la respuesta del servidor
        console.log(data)
        localStorage.email = data.email
        router.push('/profile')
      })
      .catch(error => {
        // Manejar errores de red u otros errores de la solicitud
        console.error('Error:', error);
      });
    

}

export const register = (name:string, lastname:string, email:string, password:string, repassword:string) =>  {
    router.push('/profile')
    localStorage.email = email

}