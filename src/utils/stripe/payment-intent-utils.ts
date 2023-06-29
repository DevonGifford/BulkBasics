export const paymentIntent = async <T>(
    url: string,
    cartTotal: number
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        amount: cartTotal*100,
        currency: 'eur',
        automatic_payment_methods: {
          enabled: true,
        },
      })
    });

    const data = await res.json();
    const clientSecret = data.paymentIntent.client_secret;
    console.log('this is the typeof check: ', typeof clientSecret)
    console.log('this is the data itself: ', clientSecret);

    // const {client_secret: clientSecret} = await res.json();
    return await clientSecret;
  }
  

  //THis is returning my client secret 