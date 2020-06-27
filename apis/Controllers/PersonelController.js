const express = require('express')
const routerPersonel = express.Router()
const cors = require('cors')
const faker = require('faker')
const dbPool = require('../DB/DbPool')
const Person = require('../Models/Person')

routerPersonel.get('/version', (req, res) => {
    res.send('Personel v0.1')
})


routerPersonel.get('/faker', cors(), (req, res) => {
    for(var i=0; i<500; i++) {
        Person.create({
            code: faker.random.number(),
            address: faker.address.streetAddress(),
            name: faker.name.firstName() + " " + faker.name.lastName(),
            department: faker.commerce.department(),
            section: faker.lorem.word(),
            attribute1: faker.lorem.word(),
            attribute2: faker.lorem.word(),
            expertise: faker.lorem.word(),
            costPerDay: faker.random.number(100),
            costPerHour: faker.random.number(100),
            notes: faker.lorem.word(),
        }, (err, Person) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            }
        })
    }
    return res.status(201).send("Created fake data")
} )

routerPersonel.get('/all/:page*?', async(req, res)=> {

    var perPage = 20
    var page = req.params.page || 1

    try{
        const count = await Person.countDocuments();
        const persons = await Person.find().skip((perPage * page) - perPage).sort({ code: -1 }).limit(perPage)
        res.status(200).send(
            {
                pages: Math.ceil(count / perPage),
                records: count,
                currentPage: page,
                persons : persons
            }
        )
    }
    catch(error) {
        res.status(500).send(error)
    }

})

module.exports = routerPersonel