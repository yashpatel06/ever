/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CustomTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="tab-buttons flex gap-5  justify-center">
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={` cursor-pointer ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <p
              className={`text-[20px] font-semibold relative  ${
                index === activeTab
                  ? "text-[#325131] bg-[#D7DE96] px-4 py-1 rounded-t-md"
                  : " px-4 py-1 rounded-t-md "
              }`}
            >
              {tab.title}
              <div
                className={`${
                  index === activeTab
                    ? "h-[4px] bg-[#325131] absolute bottom-0 w-full left-0 rounded-lg"
                    : ""
                }`}
              ></div>
            </p>
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default CustomTab;
