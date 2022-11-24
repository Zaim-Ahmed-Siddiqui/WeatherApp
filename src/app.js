const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = process.env.PORT || 3000


app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../templates/views"))
hbs.registerPartials(path.join(__dirname, "../templates/partials"))

app.use(express.static(path.join(__dirname, "../public")))



app.get("/", (req, res) => {
    res.render("index")
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("*", (req, res) => {
    res.send("404error")
})


app.listen(port, () => {
    console.log("port is listening")
})