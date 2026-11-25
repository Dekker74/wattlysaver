import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const BoltIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 4.5 13.2a.7.7 0 0 0 .55 1.13H10l-1 7.67 8.5-11.2a.7.7 0 0 0-.55-1.13H13l1-7.67Z" />
  </Icon>
);

export const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m3 10 9-7 9 7" />
    <path d="M5.5 9.2V20h13V9.2" />
    <path d="M9.5 20v-6h5v6" />
  </Icon>
);

export const ChartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-6M12 20V5M17 20v-9" />
  </Icon>
);

export const WalletIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <path d="M3 10h18M16.5 14.5h.01" />
    <path d="M6 6V4.5A1.5 1.5 0 0 1 7.5 3H17" />
  </Icon>
);

export const CompassIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.4 8.6-2.1 4.7-4.7 2.1 2.1-4.7 4.7-2.1Z" />
  </Icon>
);

export const PlanIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z" />
    <path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9" />
  </Icon>
);

export const ArrowIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const LeafIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 4c-8.5 0-14 3.6-14 10a6 6 0 0 0 6 6c6.4 0 8-5.5 8-16Z" />
    <path d="M4 20c2-4.5 5.5-8 11-11" />
  </Icon>
);

export const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </Icon>
);

export const SparkleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const LockIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="10" width="14" height="11" rx="2.5" />
    <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
  </Icon>
);

export const EditIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
  </Icon>
);

export const TrashIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13" />
    <path d="M10 11v5M14 11v5" />
  </Icon>
);
