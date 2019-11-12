import React, {Component} from 'react';
import AddTaskForm from "./components/Form";
import Task from "./components/Task";


class App extends Component {
  state= {
    currentTask: '',
    tasks: [
      {id: '2019-12-23T12:39:06.260Z', text: 'Сходить в кино', isDone: false},
      {id: '2019-04-10T12:39:27.549Z', text: 'Почитать книгу', isDone: true},
      {id: '2019-12-31T18:41:58.355Z', text: 'Новый Год!!!', isDone: false}
    ]
  };

  inputTask = (event) => {
    this.setState({
      currentTask: event.target.value
    });
  };

  addTask = () => {
    if (this.state.currentTask) {
      const date = new Date();
      const tasks = [...this.state.tasks];
      const task = {
        id: date.toISOString(),
        text: this.state.currentTask,
        isDone: false
      };
      tasks.push(task);

      this.setState({
        currentTask: '',
        tasks
      });
    } else {
      alert('Enter task!');
    }
  };

  removeTask = id => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);

    this.setState({tasks});
  };

  changeTaskStatus = id => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === id);
    const tasks = [...this.state.tasks];
    const task = {...this.state.tasks[taskIndex]};

    task.isDone = !task.isDone;
    tasks[taskIndex] = task;

    this.setState({tasks});
  };

  render() {
    return (
        <div className="container">
          <AddTaskForm
              currentTask={this.state.currentTask}
              onAddTask={() =>this.addTask()}
              onInputTask={(event) => this.inputTask(event)}
          />
          {this.state.tasks.map((task) => (
              <Task
                  key={task.id}
                  text={task.text}
                  isDone={task.isDone}
                  onRemoveTask={() => this.removeTask(task.id)}
                  onChangeStatus={() => this.changeTaskStatus(task.id)}
              />
          ))}
        </div>
    );
  }
}

export default App;
