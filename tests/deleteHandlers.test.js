const config = require('../config');

test('Should verify DELETE request returns 200 OK', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(response);
		console.log(data);

    } catch (error) {
        console.error(error);

    expect(response.status).toBe(200);
    }
    
});

test('Should verify DELETE kit 7 and verify response body', async () => {
    try {const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
        method: 'DELETE',
    });

    const actualResponseBody = await response.json();

    expect(actualResponseBody).toEqual({ ok: true });

} catch (error){
    console.error('Error:', error);

}
});