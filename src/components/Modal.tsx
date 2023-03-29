import { ReactNode } from "react";
import "./Layout/Form";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isVisible: boolean;
}

const Modal = ({ children, onClose, isVisible }: ModalProps) => {
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  if (!isVisible) return null;
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto bg-[#161A23] bg-opacity-60 backdrop-blur-sm flex justify-center items-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="lg:w-[605px] lg:h-[516px] w-[338px] h-[386px] bg-[#FCFCFC] rounded-[4px] flex flex-col justify-center items-center">
        {children}
        <button
          onClick={onClose}
          className="border border-[#5BDB8A] flex justify-center items-center text-[#5BDB8A] font-primary font-semibold text-lg mt-[30px] py-3 px-[82px] cursor-pointer"
        >
          <img
            src="/images/download.svg"
            alt="download"
            className="mr-[10px] "
          />
          Download
        </button>
      </div>
    </div>
  );
};

export default Modal;
