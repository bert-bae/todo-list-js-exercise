// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markComplete: function () {
      this.complete = true;
    },

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Throw out the cat litter");
const task2 = newTask("Do laundry", "Make sure to do laundary and fold them");
const tasks = [task1, task2];

tasks.push(newTask("Cook lunch", "might need to go shopping today"));

task1.logState();
task1.markComplete();
task1.logState();
