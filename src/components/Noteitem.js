import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4 my-2">
      
      

      <div class="card">
        <div class="card-header">{note.tag}</div>
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
          {note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cumque soluta blanditiis eligendi beatae hic ut quis unde officia facilis, totam impedit porro molestias eos sint eaque ad voluptas voluptatem.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
