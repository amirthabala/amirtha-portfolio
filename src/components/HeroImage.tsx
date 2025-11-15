"use client";

import Image from "next/image";
import style from "../styles/heroImage.module.css";

const HeroImage = ({
  isMobile,
  isShrink,
}: {
  isMobile: boolean;
  isShrink: boolean;
}) => {
  return isMobile ? (
    <div className="h-4" id="about" />
  ) : (
    <div className={isShrink ? style.shrink : style.grow} id="about">
      <div className={style.imgContainer}>
        <Image
          src="/amirtha-img.png"
          alt="Profile Picture"
          width={800}
          height={500}
          priority
          className="rounded-md aspect-800/500"
        />
      </div>
    </div>
  );
};

export default HeroImage;
