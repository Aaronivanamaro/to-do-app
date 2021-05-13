import React, {useContext, useState} from 'react'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import AddNewProject from './AddNewProject'
import Project from './Project'
import { TodoContext } from '../context'
import { useSpring, animated } from 'react-spring'

function Projects() {

    const [showMenu, setShowMenu] = useState(true)
    const [edit, setEdit] = useState(false)
    const pencilColor = edit ? "#1EC94C" : "#025955"
    const changeHover = edit ? "onClick" : "edit"

    // CONTEXT
    const { projects } = useContext(TodoContext)

    // ANIMATION
    const spin = useSpring({
        transform : showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
        config : { friction : 10 }
    })

    const menuAnimation = useSpring({
        display : showMenu ? 'block' : 'none',
        lineHeight : showMenu ? 1.2 : 0
    })

    return (
        <div className='Projects'>
            <div className="header">
                <div className="title">
                    <Palette size={24}
                             color="#025955" />
                    <p>Projects</p>
                </div>
                <div className="btns">
                    {
                        showMenu && projects.length > 0 &&
                        <span className={changeHover} onClick={ () => setEdit(edit => !edit)}>
                            <PencilFill size={16} color={pencilColor} />
                        </span>
                    }
                    <AddNewProject />
                    <animated.span
                        className='arrow'
                        onClick={() => setShowMenu(!showMenu)}
                        style={spin}
                    >
                        <CaretUp size={24}
                                 color="#025955" />
                    </animated.span>
                </div>
            </div>
            <animated.div style={menuAnimation} className="items">
                {
                    projects.map( project => 
                        <Project
                            project={project}
                            key={project.id}
                            edit={edit}
                        />
                    )
                }
            </animated.div>
        </div>
    )
}

export default Projects