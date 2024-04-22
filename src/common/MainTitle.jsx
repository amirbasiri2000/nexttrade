import React from 'react'

const MainTitle = ({title}) => {
  return (
    <div className="mb-10 flex justify-center">
      <h3 className="text-gold-light_400 font-extrabold text-4xl capitalize">
        {title}
      </h3>
    </div>
  );
}

export default MainTitle
