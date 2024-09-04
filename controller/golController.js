const getGoals = (req,res) => {
    res.status(200).json({
        message : "Get Goals"
    })
}
const setGoals = (req,res) => {
    if(req.body){
        res.status()
    }
    
    res.status(200).json({
        message : "Set Goals",
        data: req.body
    })
}

module.exports = {getGoals, setGoals}

const updateGoal = (req,res) => {
    req.status(200).json({
        message: 'Update goal ${req.params.id}'
    })
}

const deleteGoal = (req,res) => {
    res.status(200).json({
        message: 'Delete goal ${res.params.id}'
    })
}