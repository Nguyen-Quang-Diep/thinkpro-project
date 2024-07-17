import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { postCreateUser } from 'src/Services/userServices'
import { toast } from 'react-toastify';

const ModalAndNew = (props) =>{

  const { show , handleClose, handleUpdateTable} = props

  const [name ,setName] = useState("")

  const [job, setJob] = useState("")

  const handleSaveUser = async () =>{
    let res = await postCreateUser(name,job)

    if(res && res.id){
      //success
      handleClose('')
      setName('')
      setJob('')
      toast.success("A user is created succeed!")
      handleUpdateTable({first_name: name, id: res.id})
    }else{
      //fail
      toast.error("An error...")
    }
  }

  return <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" 
                className="form-control border"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Job</label>
                <input type="text" 
                className="form-control border"
                value={job}
                onChange={(event) => setJob(event.target.value) }
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>
}

export {ModalAndNew}