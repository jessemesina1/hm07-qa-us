// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
};

test('Verify POST request returns status code 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        actualStatus = response.status; 
        console.log('Response status:', actualStatus); 
    } catch (error) {
        console.error('Error making request:', error); 
    }

    expect(actualStatus).toBe(200); 
});
	



test('response body contains expected return for POST request', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
});
