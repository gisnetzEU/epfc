const express = require('express');
const port = process.env.PORT || 3001;
let app= express();

app.use((req, res) => {
    console.log(req);
    res.end("hello Express");
});

app.listen(port, () => console.log('listen on port ${port}'));