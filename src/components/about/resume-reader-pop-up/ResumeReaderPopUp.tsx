import { FC } from "react";
import styles from "./ResumeReaderPopUp.module.css";
import Link from "next/link";

interface ResumeReaderPopUpProps {
  onClose: () => void;
}

const ResumeReaderPopUp: FC<ResumeReaderPopUpProps> = ({ onClose }) => {
  const path_to_pdf = process.env.NODE_ENV === 'production' ? "/portfolio-next/assets/documents/fullstack.pdf" : "/assets/documents/fullstack.pdf";
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <span
          className="
          w-full
         text-white
          flex
          justify-end 
          py-3
          px-4
          "
        >
          <svg
            onClick={onClose}
            className="cursor-pointer"
            fill="#fff"
            width="15px"
            height="15px"
            viewBox="-28 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>cancel</title>
            <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z" />
          </svg>
        </span>
        <iframe
          className="rounded-[10px] h-full w-full"
          src={path_to_pdf}
        >
          <p className="text-black">
            Unable to display PDF file. <Link href={path_to_pdf}>Download</Link> it
            instead.
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default ResumeReaderPopUp;
