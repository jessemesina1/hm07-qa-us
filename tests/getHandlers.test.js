// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		console.log(response)
	} catch (error) {
		console.error(error);

	}

});

test('Response body contains expected returns for GET request', async () => {
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