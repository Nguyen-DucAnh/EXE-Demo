import React from "react";
import logoImg from "../assets/logo.png";

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center overflow-visible ${className}`}>
            {/* Background Glow/Aura for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl scale-125 animate-pulse opacity-40"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center mix-blend-screen bg-black rounded-full overflow-hidden">
                {/* Gradient Layer - The colors that will fill the lines */}
                <div
                    className="absolute inset-0 z-0"
                    style={{ background: "linear-gradient(135deg, #1D4ED8 20%, #F97316 80%)" }}
                />

                {/* 
                    Luminance Mask: 
                    The image is inverted (white lines on black) and multiplied by the gradient.
                    Result: Gradient lines on a black background.
                */}
                <img
                    src={logoImg}
                    alt=""
                    className="relative z-10 w-[110%] h-[110%] max-w-none object-contain mix-blend-multiply filter invert(1) contrast(1.5) brightness(1.2)"
                    style={{
                        transform: "translateY(-2%)",
                        WebkitMaskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                        maskImage: "radial-gradient(circle, black 65%, transparent 100%)",
                    }}
                />
            </div>
        </div>
    );
};
