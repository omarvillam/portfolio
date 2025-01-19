import {IconProps} from "../types";

function Pause({ ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         width={32} height={32} style={{cursor: 'pointer'}} {...props}>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
  );
}

export default Pause