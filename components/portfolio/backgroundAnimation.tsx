
interface BackgroundAnimationProps {

}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({

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
            // background: isDarkMode
            //   ? "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
            //   : "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)",
            background:"linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)",
            transform: `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 8 + 4}px) translateY(${Math.random() * 12 + 4}px)`,
            animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Floating Particles */}
    {[...Array(15)].map((_, i) => {
  const colorClasses = [
   "bg-[rgba(59,130,246,0.2)]", // blue-500 with 5% alpha
  "bg-[rgba(168,85,247,0.2)]", // purple-500
  "bg-[rgba(236,72,153,0.2)]", // pink-500
  "bg-[rgba(6,182,212,0.2)]",  // cyan-500
  "bg-[rgba(250,204,21,0.2)]", // yellow-400
  ]

  const sizeClasses = [
    "w-1 h-1",
    "w-2 h-2",
    "w-3 h-3",
    "w-4 h-4",
  ]

  const color = colorClasses[Math.floor(Math.random() * colorClasses.length)]
  const size = sizeClasses[Math.floor(Math.random() * sizeClasses.length)]
  const delay = `${Math.floor(Math.random() * 3000)}ms`
  const duration = `${Math.floor(Math.random() * 10 + 10)}s`

  return (
    <div
      key={`particle-${i}`}
  className={`absolute rounded-full ${color} ${size} random-move`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  )
})}



      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 dark:opacity-10"
        style={{
          // backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? "white" : "black"} 1px, transparent 0)`,
                    backgroundImage: `radial-gradient(circle at 1px 1px,  "black"} 1px, transparent 0)`,

          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
