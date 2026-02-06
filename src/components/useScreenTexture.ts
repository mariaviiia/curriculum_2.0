import * as THREE from "three";
import { useMemo } from "react";

export function useScreenTexture() {
  const texture = useMemo(() => {
    const dpr = window.devicePixelRatio || 1;
    const W = 1000;
    const H = 1650;


    // ===== CANVAS =====
    const canvas = document.createElement("canvas");
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    // ===== LOGO IMAGE =====
    const logo = new Image();
    logo.src = "/preview.png"; // ⚠️ must be in /public

    logo.onload = () => {
        ctx.clearRect(0, 0, W, H);

        // Background
        ctx.fillStyle = "#1e1e1eff";
        ctx.fillRect(0, 0, W, H);

        // Logo
        const logoSize = 500;
        ctx.drawImage(
            logo,
            W / 3.25 - logoSize / 2.5,
            H / 6 - logoSize / 3 - 5,
            logoSize,
            logoSize
        );

  // Text
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#94a3b8";
  ctx.font = "28px Inter, system-ui";
  ctx.fillText("Click me", W / 2, H / 2 + logoSize / 2 + 10);

  texture.needsUpdate = true;
};

const texture = new THREE.CanvasTexture(canvas);
texture.colorSpace = THREE.SRGBColorSpace;
texture.anisotropy = 8;

// Correct orientation for THIS laptop model
texture.center.set(0.5, 0.5);
texture.rotation = Math.PI;

texture.needsUpdate = true;
return texture;

    return texture;
  }, []);

  return texture;
}

