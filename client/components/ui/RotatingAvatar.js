"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function RotatingAvatar({
  profileImage,
  cartoonImage,
  size = 150,
  interval = 3000,
  className = "",
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [profileImage, cartoonImage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt={currentImage === 0 ? "Profile picture" : "Cartoon picture"}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
