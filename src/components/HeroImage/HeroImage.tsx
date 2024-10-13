"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroImage = ({ disabledBackground = false }) => {
  const piecesRef = useRef<HTMLDivElement | null>(null);

es
  return (
    <div className="relative aspect-square w-full">
      {!disabledBackground && (
        <div className="absolute bottom-0 aspect-[1.15/1] w-full rounded-[4vw] bg-gradient-to-br from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50 shadow-xl shadow-neutral-500/30" />
      )}
      {/* PERSON */}
      <Image
        loading="lazy"
        src={`/images/hero-image/mobile/hero-person.svg`}
        alt="Hero Image"
        width={950}
        height={950}
        className={`animate-fade absolute bottom-0 flex w-full object-cover lg:hidden`}
      />
      <Image
        loading="lazy"
        src={`/images/hero-image/desktop/hero-person.svg`}
        alt="Hero Image"
        width={950}
        height={950}
        className={`animate-fade absolute bottom-0 hidden w-full origin-bottom scale-[1.2] object-cover lg:flex`}
      />

      {/* PIECES */}
      <div className="animate-fade w-full" ref={piecesRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <>
            <Image
              loading="lazy"
              src={`/images/hero-image/mobile/hero-${index}.svg`}
              alt={`Hero Image Piece ${index} Mobile`}
              width={950}
              height={950}
              className={`absolute bottom-0 flex w-full origin-bottom object-cover lg:hidden ${
                index % 4 === 0
                  ? "animate-floating-1"
                  : index % 4 === 1
                    ? "animate-floating-2"
                    : index % 4 === 2
                      ? "animate-floating-3"
                      : "animate-floating-4"
              }`}
            />
            <Image
              loading="lazy"
              src={`/images/hero-image/desktop/hero-${index}.svg`}
              alt={`Hero Image Piece ${index} Desktop`}
              width={950}
              height={950}
              className={`absolute bottom-0 hidden w-full origin-bottom lg:flex ${
                index % 4 === 0
                  ? "animate-floating-1"
                  : index % 4 === 1
                    ? "animate-floating-2"
                    : index % 4 === 2
                      ? "animate-floating-3"
                      : "animate-floating-4"
              }`}
              style={{ scale: 1.2 }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
