import React from "react"
import { IconProps } from ".."

const IconLightMode: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 2.5V4.375M15.3033 4.69667L13.9775 6.0225M17.5 10H15.625M15.3033 15.3033L13.9775 13.9775M10 15.625V17.5M6.0225 13.9775L4.69667 15.3033M4.375 10H2.5M6.0225 6.0225L4.69667 4.69667M13.125 10C13.125 10.8288 12.7958 11.6237 12.2097 12.2097C11.6237 12.7958 10.8288 13.125 10 13.125C9.1712 13.125 8.37634 12.7958 7.79029 12.2097C7.20424 11.6237 6.875 10.8288 6.875 10C6.875 9.1712 7.20424 8.37634 7.79029 7.79029C8.37634 7.20424 9.1712 6.875 10 6.875C10.8288 6.875 11.6237 7.20424 12.2097 7.79029C12.7958 8.37634 13.125 9.1712 13.125 10Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconLightMode
