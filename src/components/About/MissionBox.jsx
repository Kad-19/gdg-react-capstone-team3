import React from "react";

function MissionBox({ icon, title, detail }) {
  return (
    <div className=" flex flex-col items-center">
      <div>{icon}</div>
      <div>
        <h2 className=" text-center text-4xl font-semibold lg:text-5xl my-4">
          {title}
        </h2>
        <p className="text-center font-medium text-[18px] ">{detail}</p>
      </div>
    </div>
  );
}

export default MissionBox;
