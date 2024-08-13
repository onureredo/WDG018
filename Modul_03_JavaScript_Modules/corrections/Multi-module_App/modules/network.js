const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw Error('Fetching failed');
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
    // showErrorToUser()
  }
};

export { getProducts };
