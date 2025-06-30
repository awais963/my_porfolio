type GradientSubHeadingProps = {
  text: string;
  fromColor: string;    // e.g., "from-blue-500"
  toColor: string;      // e.g., "to-purple-500"
  textSize?: string;    // optional, e.g., "text-2xl md:text-3xl"
  className?: string;   // optional additional Tailwind classes
};

export const GradientSubHeading = ({
  text,
  fromColor,
  toColor,
  textSize = "text-2xl md:text-3xl",
  className = "",
}: GradientSubHeadingProps) => {
  return (
    <h3
      className={`font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r ${textSize} ${fromColor} ${toColor} ${className}`}
    >
      {text}
    </h3>
  );
};
