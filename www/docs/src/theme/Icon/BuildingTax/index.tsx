import React from "react"
import { IconProps } from ".."

const IconBuildingTax: React.FC<IconProps> = ({
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
        d="M17.5 7.5H2.5V5.83333L10 2.5L17.5 5.83333V7.5Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M8.33333 16.6666H2.5L3.22917 14.1666H8.33333"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16667 7.5V14.1667M7.50001 14.1667V7.5"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
      />
      <path
        d="M17.1354 11.1979L12.0312 16.302"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2917 12.0834C12.6368 12.0834 12.9167 11.8036 12.9167 11.4584C12.9167 11.1132 12.6368 10.8334 12.2917 10.8334C11.9465 10.8334 11.6667 11.1132 11.6667 11.4584C11.6667 11.8036 11.9465 12.0834 12.2917 12.0834Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.875 16.6666C17.2202 16.6666 17.5 16.3868 17.5 16.0416C17.5 15.6964 17.2202 15.4166 16.875 15.4166C16.5298 15.4166 16.25 15.6964 16.25 16.0416C16.25 16.3868 16.5298 16.6666 16.875 16.6666Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconBuildingTax
