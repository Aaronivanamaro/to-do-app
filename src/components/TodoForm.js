import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#00917C"
      }
    }
  });

function TodoForm({
    handleSubmit,
    heading = false,
    text, setText,
    day, setDay,
    time, setTime,
    todoProject, setTodoProject,
    projects,
    showButtons = false,
    setShowModal = false
}){

    return (
      <ThemeProvider theme={newTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className="text">
                    {
                        heading && 
                        <h3>{heading}</h3>
                    }
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='To do ...'
                        autoFocus
                    />
                </div>
                <div className="remind">
                    <Bell className="icons-style"
                          color="#025955" />
                    <p>Remind Me!</p>
                </div>
                <div className="pick-day">
                    <div className="title">
                        <CalendarDay color="#025955"/>
                        <p>Choose a day</p>
                    </div>
                    <DatePicker
                        value={day}
                        onChange={day => setDay(day)}
                    />
                </div>
                <div className="pick-time">
                    <div className="title">
                        <Clock color="#025955"/>
                        <p>Choose time</p>
                    </div>
                    <TimePicker
                        value={time}
                        onChange={time => setTime(time)}
                    />
                </div>
                <div className="pick-project">
                    <div className="title">
                        <Palette className="icons-style"
                                 color="#025955" />
                        <p>Choose a project</p>
                    </div>
                    <div className="projects">
                        {
                            projects.length > 0 ?
                            projects.map( project => 
                                <div
                                    className={`project ${todoProject === project.name ? "active" : ""}`}
                                    onClick={() => setTodoProject(project.name)}
                                    key={project.id}
                                >
                                    {project.name}
                                </div>    
                            )
                            :
                            <div style={{color:'#ff0000', 
                                         fontWeight:'600', letterSpacing:'0.35px'}}>
                                Please add a project before proceeding
                            </div>
                        }
                    </div>
                </div>
                {
                    showButtons &&
                    <div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='35'/>
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </div>
                }
            </form>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    )
}

export default TodoForm