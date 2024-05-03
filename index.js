var qs = require('querystring');+
const { Client } = require('pg');

const client = new Client({
	user: 'paint',
	password: 'o9XtEdRtJ8cf3pFV6GHWVeqnElJujxSo',
	host: 'dpg-coqjkov79t8c738ionr0-a',
	port: '5432',
	database: 'paint',
});

client.query('SELECT * FROM customers', (err, result) => {
	if (err) {
		console.error('Error executing query', err);
	} else {
		console.log('Query result:', result.rows);
	}
});

client
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});

function (request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);

            var x = post['x'];
            var y = post['y'];

            const r = post[r];
            const g = post[g];
            const b = post[b];

            
            
            // use post['blah'], etc.
        });
    }
}
