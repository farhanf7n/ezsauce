import img1 from '../assets/coursera1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

export default function Card() {
  return (
    <div className="pt-[30px] w-[1160px] mx-auto">
      <div className="grid grid-cols-4 gap-[10px]">
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] rounded-[8px] bg-contain mb-[20px]"
              src={img1}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Courses
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Coursera
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
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] bg-contain rounded-[8px] mb-[20px]"
              src={img3}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Learning
              </span>
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Online Courses
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Domestika
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
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] bg-contain rounded-[8px] mb-[20px]"
              src={img2}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Frontend
              </span>
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Project-based Learning
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Frontend Mentor
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
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] bg-contain rounded-[8px] mb-[20px]"
              src={img4}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Frontend
              </span>
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Project-based Learning
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Frontend Practice
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
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] bg-contain rounded-[8px] mb-[20px]"
              src={img5}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Learning
              </span>
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                UI/UX
              </span>
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Web Design
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Growth.design
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
        <div className="bg-[#EFEFEF] border border-1 border-slate-gray rounded-[8px] shadow-drop hover:cursor-pointer">
          <div className="p-[24px]">
            <img
              className="w-full h-[135px] bg-contain rounded-[8px] mb-[20px]"
              src={img6}
              alt=""
            />
            <div className="flex gap-[8px]">
              <span className="bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] py-[4px] px-[6px]">
                Frontend
              </span>
            </div>
            <div className="pt-[8px] flex justify-between items-center">
              <span className="text-[20px] font-semibold leading-[30px]">
                Roadmap.sh
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
      </div>
    </div>
  );
}
