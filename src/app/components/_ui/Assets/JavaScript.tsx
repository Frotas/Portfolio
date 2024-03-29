"use client";
import { IconType } from ".";
import CN from "@app/helpers/ClassHelper";

export default function JavaScript({ className, ...props }: IconType) {
  const style = `w-auto h-auto max-w-[64px] max-h-[64px]`;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={CN(style, className)}
      fill="none"
    >
      <path
        fill="#F0DB4F"
        d="M49 0H15C6.716 0 0 6.716 0 15v34c0 8.284 6.716 15 15 15h34c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15Z"
      />
      <path
        fill="#242938"
        d="m16.828 53.483 4.897-2.964c.945 1.675 1.805 3.093 3.867 3.093 1.976 0 3.222-.773 3.222-3.78v-20.45h6.014v20.535c0 6.229-3.651 9.064-8.979 9.064-4.81 0-7.604-2.491-9.021-5.498m21.267-.644 4.897-2.836c1.29 2.105 2.965 3.652 5.929 3.652 2.492 0 4.081-1.246 4.081-2.965 0-2.061-1.632-2.792-4.382-3.994l-1.503-.645c-4.34-1.847-7.218-4.167-7.218-9.065 0-4.51 3.437-7.948 8.807-7.948 3.824 0 6.573 1.332 8.55 4.812l-4.683 3.007c-1.032-1.847-2.148-2.577-3.867-2.577-1.761 0-2.878 1.117-2.878 2.577 0 1.804 1.117 2.535 3.694 3.652l1.504.645c5.112 2.19 7.99 4.424 7.99 9.45 0 5.414-4.252 8.378-9.966 8.378-5.585 0-9.194-2.663-10.955-6.143Z"
      />
    </svg>
  );
}
