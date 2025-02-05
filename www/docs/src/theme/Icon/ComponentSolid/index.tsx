import React from "react"
import { IconProps } from ".."

const IconComponentSolid: React.FC<IconProps> = ({
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
        d="M5.125 7.37509L7.75 10.0001L5.125 12.6251L2.5 10.0001L5.125 7.37509Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99969 2.5L12.6247 5.125L9.99969 7.75L7.37469 5.125L9.99969 2.5Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8752 7.37509L17.5002 10.0001L14.8752 12.6251L12.2502 10.0001L14.8752 7.37509Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99969 12.25L12.6247 14.875L9.99969 17.5L7.37469 14.875L9.99969 12.25Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconComponentSolid
