// Dependencies

const stages = require('express').Router()
const db = require('../models')
const { Stage, Event } = db

// Find all stages

stages.get('/', async(req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
        console.log('success')
    } catch(error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC STAGE
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_name: req.params.name },
            include:{ 
                model: Event, 
                as: "events",
                through: { attributes: [] }
            },
            order: [
                [{ model: Event, as: "events" }, 'date', 'ASC'],
            ]
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create a stage

stages.post('/', async(req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully created new stage',
            data: newStage 
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Update a stage

stages.put('/:id', async(req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} Stage`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Delete a stage

stages.delete('/:id', async(req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// Export

module.exports = stages