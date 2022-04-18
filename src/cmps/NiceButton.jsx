export function NiceButton({Icon, children, ...restOfProps}) {
  return (
    <button {...restOfProps}>
      {Icon && <Icon />} {children}
    </button>
  );
}
