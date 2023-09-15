require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('633d45807fb5cb855af312b2').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('633d5d063f504b34666e4c5d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})