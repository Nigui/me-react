import { ReactElement, ReactNode, cloneElement, createElement } from "react";

type CardButtonDefaultProps = {
  icon: ReactElement;
  label: string;
};

type CardButtonLinkProps = CardButtonDefaultProps & {
  href?: string;
};

type CardButtonActionProps = CardButtonDefaultProps & {
  onClick?: () => unknown;
};

export type CardButtonProps = CardButtonLinkProps | CardButtonActionProps;

export function CardButton(props: CardButtonProps) {
  const { label, icon } = props;

  const href = (props as CardButtonLinkProps).href;
  const onClick = (props as CardButtonActionProps).onClick;

  const sharedProps = {
    className:
      "flex gap-1 items-center bg-lighter-10 text-lighter-70 p-5 sm:px-3 sm:py-2 rounded-xl sm:rounded-lg font-light hover:bg-lighter-50 hover:text-lighter",
  };
  const childrens: ReactNode[] = [
    cloneElement(icon, { className: "w-10 sm:w-5" }),
    <span key="card-button-label" className="hidden sm:block">
      {label}
    </span>,
  ];

  return href
    ? createElement(
        "a",
        { ...sharedProps, href, target: "_blank", rel: "noopener noreferrer" },
        ...childrens
      )
    : createElement("button", { ...sharedProps, onClick }, ...childrens);
}
