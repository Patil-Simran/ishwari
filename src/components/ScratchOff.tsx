import { useRef, useState, useEffect, useCallback } from "react";

interface ScratchOffProps {
  label: string;
  revealText: string;
  size?: number;
}

const ScratchOff = ({ label, revealText, size = 100 }: ScratchOffProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Gold gradient overlay
    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, "hsl(43, 72%, 60%)");
    gradient.addColorStop(0.5, "hsl(43, 72%, 55%)");
    gradient.addColorStop(1, "hsl(43, 80%, 45%)");

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add shimmer texture
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const dist = Math.sqrt((x - size / 2) ** 2 + (y - size / 2) ** 2);
      if (dist < size / 2) {
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(43, 60%, 80%)";
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // Label
    ctx.fillStyle = "hsl(43, 80%, 30%)";
    ctx.font = `500 ${size * 0.12}px "Cormorant Garamond", serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, size / 2, size / 2);
  }, [size, label]);

  const getPos = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }, []);

  const scratch = useCallback((pos: { x: number; y: number }) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.lineWidth = size * 0.25;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    lastPointRef.current = pos;

    // Check percentage scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const pct = transparent / (imageData.data.length / 4);
    if (pct > 0.4) {
      setIsRevealed(true);
      // Haptic feedback
      if (navigator.vibrate) navigator.vibrate(50);
    }
  }, [size]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsScratching(true);
    lastPointRef.current = null;
    const pos = getPos(e);
    scratch(pos);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isScratching) return;
    scratch(getPos(e));
  };

  const handleEnd = () => {
    setIsScratching(false);
    lastPointRef.current = null;
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-full overflow-hidden"
        style={{ width: size, height: size }}
      >
        {/* Hidden text underneath */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full border-2" style={{ backgroundColor: "hsl(340, 30%, 95%)", borderColor: "hsl(43, 72%, 55%, 0.3)" }}>
          <span
            className={`font-display italic font-semibold ${
              revealText.length > 3
                ? size >= 120
                  ? "text-2xl sm:text-3xl"
                  : size >= 104
                    ? "text-xl sm:text-2xl"
                    : "text-lg sm:text-xl"
                : size >= 120
                  ? "text-4xl sm:text-5xl"
                  : size >= 104
                    ? "text-3xl sm:text-4xl"
                    : "text-2xl sm:text-3xl"
            }`}
            style={{ color: "hsl(340, 65%, 47%)" }}
          >
            {revealText}
          </span>
        </div>

        {/* Scratch canvas on top */}
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className={`absolute inset-0 rounded-full cursor-pointer transition-opacity duration-500 ${
            isRevealed ? "opacity-0 pointer-events-none" : ""
          }`}
          style={{ touchAction: "none" }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>
      <span className="font-body text-muted-foreground text-sm tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
};

export default ScratchOff;
