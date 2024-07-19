const config = require('../config');

const requestBody = {"price": 175}

test('Should return status code 200 with PUT request', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`);
		console.log(response)
		console.log(actualStatusCode);
	} catch (error) {
		console.error(error);

        expect(actualStatusCode).toBe(200);

	}
	
});


test('Should update product price with PUT method', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const actualResponseBody = await response.json();
        console.log(actualResponseBody);  
        expect(actualResponseBody["ok"]).toBe(true);
    } catch (error) {
        console.error(error);
        
    }
});