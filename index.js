//Function to create a new task object
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function() {
      this.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      const title = this.title;
      const complete = this.complete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
  };
  return task;
};

// Test Code

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// console.log(tasks);

console.log(task1);
task1.markCompleted();
console.log(task1);
task1.logState();
