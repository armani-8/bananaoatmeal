const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server listening on port $(port)');
})

app.get('/api/planets', (req, res) => {
    const testObject = { message: 'I hate this test message'};
    res. json(testObject);
})

