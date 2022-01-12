import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4 my-2">
      
      

      <div className="card">
        <div className="card-header">{note.tag.toUpperCase()} <span><i class="fas fa-edit mx-2"></i><i class="fas fa-trash mx-2"></i></span></div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
          {note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cumque soluta blanditiis eligendi beatae hic ut quis unde officia facilis, totam impedit porro molestias eos sint eaque ad voluptas voluptatem.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
