import { cn } from '../lib/cn';

function Icon({ children, className, viewBox = '0 0 24 24', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn('h-5 w-5', className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Icon>
  );
}

export function XIcon(props) {
  return (
    <Icon {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
  );
}

export function ArrowUpIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </Icon>
  );
}

export function ArrowDownIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </Icon>
  );
}

export function SunIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={cn('h-5 w-5', className)}
      {...props}
    >
      <circle cx="8" cy="8" r="3.33" />
      <path d="M8 1.33v1M8 13.67v1M12.71 12.71l-.7-.7M3.99 3.99l-.71-.7M14.67 8h-1M2.33 8h-1M12.71 3.29l-.7.7M3.99 12.01l-.71.7" />
    </svg>
  );
}

export function MoonIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn('h-5 w-5', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.37 2.12c-.33-.83-1.5-.83-1.83 0l-.43 1.09-1.08.43c-.83.33-.83 1.5 0 1.83l1.08.43.43 1.09c.33.83 1.5.83 1.83 0l.43-1.09 1.08-.43c.83-.33.83-1.5 0-1.83l-1.08-.43-.43-1.09Zm-5.87 5.83c-.33-.83-1.5-.83-1.83 0l-.16.39-.39.16c-.83.33-.83 1.5 0 1.83l.39.15.16.4c.33.83 1.5.83 1.83 0l.15-.4.4-.15c.83-.33.83-1.5 0-1.83l-.4-.16-.15-.39Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
      />
    </svg>
  );
}
