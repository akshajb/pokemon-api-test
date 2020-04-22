const Regions = require('../models/Regions')

exports.getregionlist = (req, res) => {
    const response = Regions.getRegionList()

    response.then(data =>{
        res.send(data.results)
    }).catch(error =>{
        res.send(error)
    })

}

exports.getregionbyname = (req,res) => {
    const response = Regions.getRegionByName(req.params.name)

    response.then(data =>{
        res.send(data)
    }).catch(error =>{
        res.send(error)
    })
}