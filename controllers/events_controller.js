// Dependencies
const events = require('express').Router()
const db = require('../models')
const { Event, Meet_Greet, Set_Time, Band, Stage } = db

// Find All Events

events.get('/', async (req, res) => {
    try{
        console.log('test')
        const foundEvents = await Event.findAll({ order: [['date', 'ASC']] })
        res.status(200).json(foundEvents)
        console.log('all good')
    } catch (error) {
        res.status(500).json(error)
    }
})

// Find Specific Event

events.get('/:name', async (req, res) => {
    console.log('test')
    try{
        const foundEvent = await Event.findOne({
            where: { name: req.params.name },
            include: [
                {
                    model: Meet_Greet, 
                    as: "meet_greets",
                    attributes: { exclude: [ "event_id", "band_id" ] },
                    include: {
                         model: Band, 
                         as: "band", 
                    }
                },
                {
                    model: Set_Time,
                    as: "set_time",
                    attributes: { exclude: [ "event_id", "stage_id", "band_id" ] },
                    include: [
                        { model: Band, as: "band" },
                        { model: Stage, as: "stage" }
                    ]
                },
                { 
                    model: Stage, 
                    as: "stages",
                    through: { attributes: [] }
                }
            ] 
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create Event

events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully created new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Update Event

events.put('/:id', async(req, res) => {
    try {
        const updateEvent = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateEvent} Event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete Event

events.delete('/:id', async(req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} Event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Export
module.exports = events