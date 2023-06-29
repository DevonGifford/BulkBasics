export const paymentIntent = async <T>(
    url: string,
    cartTotal: number
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        amount: cartTotal*100
      })
    });

    const {client_secret: clientSecret} = await res.json();
    return await clientSecret;
  }
  