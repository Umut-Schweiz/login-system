//register an user 
const registerUser = async (newUser) => {
  try {

    await fetch(`http://localhost:4000/auth/register`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

  } catch (err) {
    console.log("error", err);
  }
}

const loginUser = async (LoginData) =>  {
  try {

    const response = await fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(LoginData),
    });

    const data = await response.json();

    return data

  } catch (err) {
    console.log("error", err);
  }
}


export { loginUser, registerUser}
  


//get all products by producer id
/**
export async function getAllProducts(producerId) {
  try {
    const productsData = await fetch(`http://localhost:3005/products/producer/${producerId}`);
    return await productsData.json();
  } catch (err) {
    console.log("error", err);
  }
}

 */
