const { get } = require('axios')
const Dev = require('./../models/dev')
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {

    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    },
    
    async store(req, res) {
        try {
            const { github_username, techs, longitude, latitude } = req.body

            let dev = await Dev.findOne({ github_username })

            if (!dev) {

                const response = await get(`https://api.github.com/users/${github_username}`)
            
                const { name = login, avatar_url, bio } = response.data
        
                const techsArray = ParseStringAsArray(techs)
        
                const location = {
                    type: 'Point',
                    coordinates : [longitude, latitude]
                }
                
                dev = await Dev.create({
                    name,
                    github_username,
                    bio,
                    avatar_url,
                    techs : techsArray,
                    location
                })
        
            }
    
            return res.json(dev)
    
        } catch (err) {
            throw new Error(err)
        }
    }
}