export function PrideGradientBar() {
  return (
    <div
      aria-hidden="true"
      className="h-2 w-full"
      style={{
        background: `linear-gradient(90deg,
          #000000 0%, #613915 10%,
          #5BCEFA 18%, #F5A9B8 24%,
          #FFFFFF 28%, #F5A9B8 32%,
          #5BCEFA 38%, #E40303 44%,
          #FF8C00 54%, #FFED00 64%,
          #008026 74%, #004DFF 84%,
          #750787 100%)`,
      }}
    />
  );
}
