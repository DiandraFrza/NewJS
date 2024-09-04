const express = require('express')
const app     = express()
const logRequest = require('./middleware/logs')
const port    = 5000;

app.use(express.json());
app.use('/api/goals', require("./routes/golRoutes"))

app.listen(port, () => console.log(`Server berhasil dijalankan di port ${port}`))
app.use(logRequest);
