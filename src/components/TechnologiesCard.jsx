import React from "react";

const TechnologiesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative card bg-myGreenDark">
      <div className="header flex flex-col items-center justify-center pt-2">
        <Icon className="text-4xl text-myGreen" />
        <p className="text-xl text-center text-myGreen font-medium py-2">
          {title}
        </p>
      </div>

      <div className="description absolute bottom-0 left-0 right-0 bg-myBlue text-white text-center py-2">
        {description}
      </div>
    </div>
  );
};

export default TechnologiesCard;
