import React from 'react';
import dataLinks from "../data/data.json";

export default function Card({ selectedCategory }) {
  const filteredData = selectedCategory === 'All'
    ? dataLinks
    : dataLinks.filter(d => d.category === selectedCategory);

  return (
    <div className="w-full lg:w-[1160px] py-7 mx-auto px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
        {
          filteredData.map((d, index) => {
            const handleCardClick = (link) => {
              window.open(link, '_blank', 'noopener,noreferrer');
            };
            return (
              <div
                key={`${selectedCategory}-${index}`}
                className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer animate-card"
                onClick={() => handleCardClick(d.link)}
              >
                <div className="p-[24px]">
                  <img
                    className="w-full h-[135px] rounded-[8px] bg-contain mb-[20px]"
                    src={d.img}
                    alt=""
                  />
                  <div className="flex gap-[8px]">
                    {d.tags.map((tg, index) => (
                      <span
                        key={index}
                        className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px] dark:text-black"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                  <div className="pt-[8px] flex justify-between items-center">
                    <span className="text-[20px] font-semibold leading-[30px] dark:text-black">
                      {d.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#000000"
                      fill="none"
                    >
                      <path
                        d="M14.7731 9.22687L9 15M14.7731 9.22687C14.2678 8.72156 11.8846 9.21665 11.1649 9.22687M14.7731 9.22687C15.2784 9.73219 14.7834 12.1154 14.7731 12.8351"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
