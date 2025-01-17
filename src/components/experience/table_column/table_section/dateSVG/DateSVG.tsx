import React from 'react';
import styles from './DateSVG.module.css';

const DateSvg = () => {
    return (
        <span className={styles.date_svg}>
           <svg
               fill="var(--main-color)"
               viewBox="0 0 36 36"
               preserveAspectRatio="xMidYMid meet"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               className={styles.svg}
           >
    <title>{"calendar-solid"}</title>
    <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"
    />
    <path
        className="clr-i-solid clr-i-solid-path-2"
        d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"
    />
    <path
        className="clr-i-solid clr-i-solid-path-3"
        d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0}/>
  </svg>

        </span>
    );
};

export default DateSvg;