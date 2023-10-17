import { createUser } from '@/modules/API/User.ts';
import { formData } from './Modal.vue';

export async function createUserRequest() {
const data = await createUser(formData);
console.log(data);
if (data.ok) {
console.log("Usuario creado", data);
}
else {
console.log("Error", data);
}
}
