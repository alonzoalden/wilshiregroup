import React from "react";
function ServiceSection({ image, title, content, id, reverse }) {
  return (
    <>
      <div id={id} className={`pt-5 pb-3 d-flex flex-column ${reverse ? "flex-md-row-reverse" : "flex-md-row"}`} style={{maxWidth: `900px`, borderBottom: `1px solid #eee`}}>
        <div className="p-3" style={{flex: 2}}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div className="p-3" style={{flex: 1}}><img src={image}/></div>
      </div>
    </>
  );
}

export default ServiceSection;
