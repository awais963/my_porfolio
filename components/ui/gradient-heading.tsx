type GradientHeadingProps = {
  text: string;
  fromColor?: string;    // e.g., "from-cyan-600"
  toColor?: string;      // e.g., "to-blue-600"
  textSize?: string;    // optional: text size classes
  className?: string;   // optional: extra styling
};

export const GradientHeading = ({
  text,
  fromColor = "from-cyan-600",
  toColor = "to-blue-600",
  textSize = "text-3xl md:text-4xl lg:text-5xl pb-2",  // updated default
  className = "",
}: GradientHeadingProps) => {
  return (
    <h2
      className={`font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${textSize} ${fromColor} ${toColor} ${className}`}
    >
      {text}
    </h2>
  );
};
