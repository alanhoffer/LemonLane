export async function createProduct(product: any) {
    
    const productData = JSON.stringify(product);

    
      const url = 'http://localhost:3000/product';
      return await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: productData, 
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
  
  export async function getProducts(page: number, quantity?: number) {
      const url = `http://localhost:3000/product`;
  
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

  export async function getAllProducts() {
    const url = `http://localhost:3000/product`;

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
export async function getProductById(id: number) {
    const url = `http://localhost:3000/product/${id}`;

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
  
  export async function deleteProduct(id: number) {
      const url = 'http://localhost:3000/product/' + id;
  
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