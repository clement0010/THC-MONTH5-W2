const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/todos', function (req, res) {
    const data = [{
        id: 1,
        title: "Mop the wall",
        isComplete: false
    },
    {
        id: 2,
        title: "Do homework",
        isComplete: false
    }]
    console.log("Todo route is called");

    res.send(data)

})

app.get('/shopping', function (req, res) {
    const data = [{
        id: 1,
        title: "Buy milk",
        isComplete: false
    },
    {
        id: 2,
        title: "Buy grocery",
        isComplete: false
    }]
    console.log("Shopping route is called");
    res.send(data)
})

app.listen(3000, function () {
    console.log("App listen at port 3000");
})