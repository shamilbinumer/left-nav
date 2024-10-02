"use client";
import React, { useState } from "react";
import { FaChevronRight, FaUser, FaDatabase, FaAngleDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

interface AccordionOption {
  title: string;
  icon: JSX.Element;
  content: { option: string }[];
}

const LeftNavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const [hoveredAccordionIndex, setHoveredAccordionIndex] = useState<number | null>(null);

  const accordionOptions: AccordionOption[] = [
    {
      title: "Account",
      icon: <FaUser className="text-white" />,
      content: [
        { option: 'Option 1' },
        { option: 'Option 2' },
        { option: 'Option 3' },
        { option: 'Option 4' }
      ]
    },
    {
      title: "Settings",
      icon: <IoMdSettings className="text-white" />,
      content: [
        { option: 'Setting 1' },
        { option: 'Setting 2' },
        { option: 'Setting 3' },
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-white" />,
      content: [
        { option: 'DB 1' },
        { option: 'DB 2' }
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <div>
      <div
        className={`h-[100vh] ${collapsed ? "w-[190px]" : "w-[55px]"} transition-all duration-200 ease-in-out bg-blue-950 fixed left-0 top-0`}
      >
        <FaChevronRight
          className={`absolute shadow-xl ${collapsed ? "rotate-180" : ""} right-[-13px] top-8 size-7 p-1 text-blue-950 bg-white rounded-md border cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        />
        <div className="left-nav-item-main flex flex-col w-[100%] pt-[70px] overflow-hidden">
          {accordionOptions.map((accordion, index) => (
            <div key={index}>
              <div
                className="flex gap-3 pl-[18px] bg-blue-900 h-[40px] cursor-pointer items-center"
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => setHoveredAccordionIndex(index)}
                onMouseLeave={() => setHoveredAccordionIndex(null)}
              >
                <div>{accordion.icon}</div>
                <div className="flex justify-between w-[100%] items-center">
                  <span className="pl-2 text-white">{accordion.title}</span>
                  <FaAngleDown
                    className={`text-white mr-4 text-l transform transition-transform duration-500 ease-in-out ${openAccordionIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  />
                </div>
              </div>

              <div
                style={{
                  width:'100px',
                  position: 'absolute',
                  left: '120px',
                  backgroundColor: ' rgb(23 37 84)',
                  border: '1px solid gray',
                  borderRadius: '0.15rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '0.5rem',
                  zIndex: 10,
                  opacity: hoveredAccordionIndex === index && openAccordionIndex !== index ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                  pointerEvents: hoveredAccordionIndex === index && openAccordionIndex !== index ? 'auto' : 'none', 
                
                }}
              >
                <ul>
                  {accordion.content.map((data, i) => (
                    <li key={i} className="text-white">{data.option}</li>
                  ))}
                </ul>
              </div>

              <div
                className={`accordian w-[100%] bg-white overflow-hidden transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight: openAccordionIndex === index ? '200px' : '0px',
                }}
              >
                <div className="pt-[10px] pr-[20px] pb-[20px] pl-[70px] bg-blue-400">
                  <ul>
                    {accordion.content.map((data, i) => (
                      <li key={i}>{data.option}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
