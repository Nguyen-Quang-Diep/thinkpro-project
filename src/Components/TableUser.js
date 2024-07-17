import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { fetchAllUser } from 'src/Services/userServices'
import ReactPaginate from 'react-paginate';
import { ModalAndNew } from './ModalAddNew';
  

export const TableUser = () => {

  const [listUser, setListUser] = useState([])

  const [totalUsers, setTotalUsers] = useState(0)

  const [totalPages, setTotalPages] = useState(0)

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)

  const handleClose = () => {
    setIsShowModalAddNew(false)
  }

  const handleUpdateTable = (user) => {
    setListUser([user, ...listUser])
  }

  useEffect(() => {
    // call apis
     getUsers(2);
    //dry

  }, [])


  const getUsers = async (page) => {
     let res = await fetchAllUser(page);
     if(res && res.data) {
         console.log(res)
         setTotalUsers(res.total)
         setListUser(res.data)
         setTotalPages(res.total_pages)
     }
  }

  const handlePageClick = (event) =>{
     getUsers(+event.selected + 1)
  }


  return <>
      <div className="my-3 add-new">
        <span className="">List User:</span>
        <button 
          className="btn btn-success"
          onClick={() => setIsShowModalAddNew(true)}
        >Add New User
        </button>
      </div>

   <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>

          {listUser && listUser.length > 0 && listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              )
          })}
        
      </tbody>
    </Table>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
     <ModalAndNew 
      show={isShowModalAddNew}
      handleClose={handleClose}
      handleUpdateTable={handleUpdateTable}
      />
  </>
}