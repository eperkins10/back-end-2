const houses = require("./db.json")
let houseId = 4


module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    
    createHouse: (req, res) => {
        const newHouse = {
            id: houseId,
            address: req.body.address,
            price: req.body.price,
            imageURL: req.body.imageURL
        }

        houses.push(newHouse)
        console.log(houses)
        res.status(200).send(houses)
        houseId++
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex((elem) => +elem.id === +id)

        if(type === "plus") {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type === "minus") {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send("something went wrong :(")
        }
    },

    deleteHouse: (req, res) => {
        const {id} = req.params
        let index = houses.findIndex((elem) => +elem.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)

        
    },

}