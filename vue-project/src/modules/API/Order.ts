export async function createOrder(order: any) {
    
    const orderData = JSON.stringify(order);
      const url = 'http://localhost:3000/order';
      return await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: orderData, 
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
  
  export async function getOrders(page: number, quantity?: number) {
      const url = `http://localhost:3000/order?page=${page}&perPage=${quantity}`;
  
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
  
  export async function deleteOrder(id: number) {
      const url = 'http://localhost:3000/order/' + id;
  
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