const tasks = [
  {
    _id: "618c3432eddf61c496096578",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: { _id: "61b017eb0cce782d386e7371", name: "Very Important" },
    completed: false,
  },
  {
    _id: "618c3459eddf61 c49609657a",
    title: "Dishes",
    task: "Do the dishes",
    category: "Home",
    severity: { _id: "61b017a20cce782d386e736f", name: "Normal" },
    completed: false,
  },
  {
    _id: "618c345feddf61c49609657c",
    title: "Laundry",
    task: "Do Laundry",
    category: "Home",
    severity: { _id: "61b017a20cce782d386e736f", name: "Normal" },
    completed: false,
  },
  {
    _id: "618c3469eddf61c49609657e",
    title: "Report",
    task: "Make Employee Report",
    category: "Work",
    severity: { _id: "61b017cc0cce782d386e7370", name: "Important" },
    completed: false,
  },
  {
    _id: "618c3474eddf61c496096580",
    title: "Brush Teeth",
    task: "Brush my Teeth",
    category: "Home",
    severity: { _id: "61b017eb0cce782d386e7371", name: "Very Important" },
    completed: false,
  },
];

export function getTasks() {
  console.log(tasks);
  return tasks;
}

export function getTask(id) {
  return tasks.find((t) => t._id === id);
}

export function saveTask(task) {
  let taskInDb = tasks.find((t) => t._id === task._id) || {};
  taskInDb.title = task.title;
  taskInDb.task = task.task;
  taskInDb.category = task.category;
  taskInDb.severity = task.severity;
  taskInDb.completed = task.completed;

  if (!taskInDb._id) {
    taskInDb._id = Date.now();
    tasks.push(taskInDb);
  }
  console.log(taskInDb);
  return taskInDb;
}

export function deleteTask(id) {
  let taskInDb = tasks.find((t) => t._id === id);
  tasks.splice(tasks.indexOf(taskInDb), 1);
  return taskInDb;
}