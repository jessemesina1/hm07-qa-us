const config = require('../config');

test('Should return status code 200 with GET request', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		console.log(response)
        console.log(actualStatusCode);
	} catch (error) {
		console.error(error);

        expect(actualStatusCode).toBe(200);

	}


});

test('Should contain "Big World" in request body', async () => {
	let data;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        data = await response.json();
		console.log(data);

    } catch (error) {
        console.error(error);
    }
	expect(data[3]["name"]).toBe("Big World");
});