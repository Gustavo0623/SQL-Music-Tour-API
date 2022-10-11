// Dependencies
const events = require('express').Router()
const db = require('../models')
const { Event } = db

// Find All Events

events.get('/', async (req, res) => {
    try{
        console.log('test')
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
        console.log('all good')
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find Specific Event



// Create Event



// Update Event



// Delete Event



// Export
module.exports = events