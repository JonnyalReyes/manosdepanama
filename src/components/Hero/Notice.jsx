import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Notice = () => {
  const [isNotice, setIsNotice] = useState(true);

  const noticeHandler = () => {
    setIsNotice(false);
  };
  return (
    <React.Fragment>
      {isNotice && (
        <div className="relative bg-sky-100 p-3 text-center">
          <span className="text-sm">
            Disfruta de <b>20% Off</b> En tu Primera compra
          </span>
          <span className="absolute right-4">
            <RxCross2
              size={"24px"}
              className="cursor-pointer"
              onClick={noticeHandler}
            />
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Notice;
