const {Schema, model} = require('mongoose');

const MaintenanceTaskSchema = new Schema({
  taskTitle: String,
  taskDescription: String,
  subTasks : [
    {
      subTaskTitle: String,
      subTaskDescription: String,
      completed: Boolean,
      position: Number,
      completedBy: String
    }
  ],
  status: String,
  daily: Boolean,
  dayToBeCompleted: Number,
  hoursToMustBeDone: Number, //Si es diario se debe poner el día que debe ser completado si es por horas a cuantas horas se debe realizar
  completedBy: String,
  createdBy: String,
  comentaries: String,
  timeToBeCompleted: Number
},
{
  timestamps: true
}
)

module.exports = model('maintenancetask', MaintenanceTaskSchema)