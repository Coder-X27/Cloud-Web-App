import React from 'react'

function Noteitem(props) {
    const {note}=props
    return (
        <div className="card col-md-5 my-2 mx-4" >
            <div className="card-header">
            {note.title}
            </div>
            <div className="card-body">
                <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, iure quam vel nobis nihil quas modi nostrum deserunt quidem.</p>
                <a href="#" className="btn btn-outline-danger mx-2">Delete</a>
                <a href="#" className="btn btn-outline-secondary mx-2">Update</a>
            </div>
        </div>
    )
}

export default Noteitem