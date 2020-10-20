import React from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal');

const Modal = ({ isOpen, toggleModal, onConfirm, children }) => {
  const el = document.createElement('div');

  React.useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isOpen &&
    createPortal(
      <>
        <div
          className={`z-10 inset-0 overflow-y-auto ${
            isOpen ? 'fixed' : 'hidden'
          } `}
        >
          <div
            onClick={() => toggleModal(false)}
            className="flex items-center min-h-screen justify-center  pt-4 px-4 pb-20 text-center  sm:p-0"
          >
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-200 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              onClick={(e) => e.stopPropagation()}
              className="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <p className="text-sm leading-5 text-gray-500 mt-2">
                      {children}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 space-x-2 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    onClick={onConfirm}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    حذف
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    onClick={() => toggleModal(false)}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    خیر
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>,

      el
    )
  );
};

export default Modal;
