import React, {useState} from 'react'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import { Plus } from 'react-bootstrap-icons'
import firebase from '../firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function AddNewProject() {
    // STATE
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        if ( projectName ) {
            const projectsRef = firebase.firestore().collection('projects')

            projectsRef
                .where('name', '==', projectName)
                .get()
                .then( querySnapshot => {
                    if (querySnapshot.empty) {
                        projectsRef
                            .add(
                                {
                                    name : projectName
                                }
                            )
                    } else {
                        MySwal.fire({
                            text: 'Project already exists',
                            icon: 'warning',
                            iconColor: '#00917C',
                            confirmButtonColor: '#025955'
                        })
                    }
                })
                
            setShowModal(false)
            setProjectName('')
        }
    }

    return (
        <div className='AddNewProject'>
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <Plus size={24}
                          color="#025955"/>
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading='New project!'
                    value={projectName}
                    setValue={setProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='+ Add Project'
                />
            </Modal>
        </div>
    )
}

export default AddNewProject