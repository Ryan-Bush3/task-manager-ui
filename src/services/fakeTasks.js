const tasks = [
    {
    _id: "618c3432eddf61c496096578",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Very Important",
    complete: false,
    },
    {
    _id: "618c3459eddf61c49609657a",
    title: "Dishes",
    task: "Do the dishes",
    category: "Home",
    severity: "Normal",
    complete: false,
    },
    {
    _id: "618c345feddf61c49609657c",
    title: "Laundry",
    task: "Do Laundry",
    category: "Home",
    severity: "Normal",
    complete: false,
    },
    {
    _id: "618c3469eddf61c49609657e",
    title: "Report",
    task: "Make Employee Report",
    category: "Work",
    severity: "Important",
    complete: false,
    },
    {
    _id: "618c3474eddf61c496096580",
    title: "Brush Teeth",
    task: "Brush my Teeth",
    category: "Home",
    severity: "Very Important",
    complete: false,
    },
    {
    _id: "618c3432eddf61c496096469",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Important",
    complete: false,
    },
    {
    _id: "618c3432eddf61c496096436",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Very Important",
    complete: false,
    },
    {
    _id: "618c3432eddf61c496096768",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Normal",
    complete: false,
    },
    {
    _id: "618c3432eddf61c496096984",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Important",
    complete: false,
    },
    {
    _id: "618c3432eddf61c49609608a",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Normal",
    complete: false,
    },
    {
    _id: "618c3432eddf61c4960964r5",
    title: "Stay Hydrated",
    task: "Drink da dew",
    category: "DayToDay",
    severity: "Very Important",
    complete: false,
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
    export function getSeverity() {
        const severities = tasks.map((item) => item.severity);
        return severities;
      }