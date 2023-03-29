import { useState } from "react";
import Modal from "../Modal";
import "./Form.css";

const Form = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  return (
    <div className="p-2">
      {/* form head  */}
      <div className="flex justify-between items-center bg-[#EFFCF4] rounded-[4px] px-3.5 md:px-8 py-3.5 h-[77px]">
        <div className="flex items-center space-x-5">
          <h1 className="text-[#414141] font-primary font-extrabold text-lg ">
            Link title
          </h1>
          <div className="w-6 h-6">
            <img
              src="/images/edit-line.svg"
              alt="edit icon"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="text-[#FCFCFC] font-semibold text-lg px-4 py-3 bg-[#5BDB8A] rounded-[4px] flex items-center h-10 md:h-[48px] ">
            <div className="w-6 h-6 md:mr-2.5">
              <img
                src="/images/add-circle-line.svg"
                alt="add icon"
                className="w-full h-full"
              />
            </div>
            <span className="md:flex hidden">Duplicate link</span>
          </button>
          <button className=" p-[15px] border-[2px] border-[#5BDB8A] rounded-[4px] flex items-center h-10 md:h-[48px] ">
            <div className="w-6 h-6">
              <img
                src="/images/external-link-line.svg"
                alt="external-link-line"
                className="w-full h-full"
              />
            </div>
          </button>
          <button className=" p-[15px] border-[2px] border-[#5BDB8A] rounded-[4px] flex items-center h-10 md:h-[48px] ">
            <div className="w-6 h-6">
              <img
                src="/images/file-chart-line.svg"
                alt="file-chart-line"
                className="w-full h-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* form body  */}
      <div className="flex justify-between lg:items-center px-9 py-8 lg:flex-row flex-col-reverse items-start">
        <div className="space-y-2">
          <h1 className="font-primary text-[#161A23] font-semibold text-base ">
            Shorten link
          </h1>
          <div className="relative lg:w-[595px] md:w-[545px] w-[290px]">
            <input
              type="text"
              className="lg:w-[550px] border border-[#D9D9D9] rounded-[4px] outline-none block md:w-[500px] w-[250px] h-[48px] text-[#5BDB8A] text-base font-primary font-normal px-6 "
              placeholder="https:// ala.n/1254"
              required
            />
            <button
              type="button"
              className="absolute right-0 bottom-0 top-0 bg-[#5BDB8A] w-[48px] h-[48px] rounded-[4px] p-3.5 "
            >
              <div className="w-6 h-6">
                <img
                  src="/images/file-copy-line.svg"
                  alt="file-copy-line"
                  className="w-full h-full"
                />
              </div>
            </button>
          </div>

          <div className="flex space-x-4">
            <h5 className="text-[#414141] font-normal text-base font-primary  ">
              Share to :{" "}
            </h5>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6">
                <img
                  src="/images/facebook-circle-fill.svg"
                  alt="facebook-circle-fill"
                  className="w-full h-full"
                />
              </div>
              <div className="w-6 h-6">
                <img
                  src="/images/twitter-fill.svg"
                  alt="twitter-fill"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 pt-[50px] w-full">
            <h1 className="text-[#161A23] font-primary font-extrabold text-base ">
              Link action summary
            </h1>
            <ul className="space-y-4 w-full">{children}</ul>
          </div>
        </div>
        <div className="border border-[#E7E7E7] lg:w-[224px] lg:rotate-[90deg] lg:h-0   my-5 md:w-[508px] w-[282px]"></div>

        <div className="bg-[#EFFCF4] lg:w-[302px] lg:h-[223px] md:w-[235px] md:h-[223px] w-[146px] h-[139px] flex items-center justify-center rounded-[4px] ">
          <button onClick={handleOpenModal}>
            <div className="md:w-[176px] md:h-[171px] w-[110px] h-[107px]">
              <img src="/images/qrcode.svg" alt="qrcode" />
            </div>
          </button>

          <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="bg-[#EFFCF4] lg:w-[302px] lg:h-[302px] w-[227px] h-[220px] flex items-center justify-center rounded-[4px] ">
              <div className="lg:w-[238px] lg:h-[232px] w-[179px] h-[174px]">
                <img
                  src="/images/qrcode.svg"
                  alt="qrcode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Form;
