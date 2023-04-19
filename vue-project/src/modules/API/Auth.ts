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
    router.push('/profile')
    localStorage.email = email
}

export const register = (name:string, lastname:string, email:string, password:string, repassword:string) =>  {
    router.push('/profile')
    localStorage.email = email

}