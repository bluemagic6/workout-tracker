const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Please enter a type of exercise',
      },
      name: {
        type: String,
        trim: true,
        required: 'Please enter a name of exercise',
      },
      duration: {
        type: Number,
        required: 'Please enter time in minutes',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
