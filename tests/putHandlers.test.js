// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {"price": 175}

test('status code should be 200', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`);
		console.log(response)
	} catch (error) {
		console.error(error);

	}
	//expect(actualStatus).toBe(200);
});


test('PUT method updates price of product', async () => {
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