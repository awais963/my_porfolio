interface BackgroundAnimationProps {
  isDarkMode: boolean;

}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({
  isDarkMode,

}) => {
  return (

    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Interactive Lines */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute opacity-20 dark:opacity-30 transition-all duration-1000"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 150 + 75}px`,
            height: "1px",
            background: isDarkMode
              ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
              : "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)",
            transform: `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 8 + 4}px) translateY(${Math.random() * 12 + 4}px)`,
            animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full opacity-40 dark:opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,

            backgroundColor: isDarkMode ? "white" : "black",
            animation: `particle-float ${Math.random() * 12 + 8}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? "white" : "black"} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
