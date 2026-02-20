import * as THREE from "three";
import { useMemo } from "react";

export function useScreenTexture() {
  const texture = useMemo(() => {
    const SCREEN_ASPECT = 1.5122;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    const H = 900;
    const W = Math.round(H * SCREEN_ASPECT);

    const canvas = document.createElement("canvas");
    canvas.width = W * dpr;
    canvas.height = H * dpr;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const texture = new THREE.CanvasTexture(canvas);

    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;

    texture.needsUpdate = true;

    const logo = new Image();
    logo.src = "/preview.jpg";

    logo.onload = () => {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "#1e1e1e";
      ctx.fillRect(0, 0, W, H);

      const scale = Math.max(W / logo.width, H / logo.height);

      const marginFactor = 0.86;
      const finalScale = scale * marginFactor;

      const drawWidth = logo.width * finalScale;
      const drawHeight = logo.height * finalScale;

      const x = (W - drawWidth) / 2;
      const y = (H - drawHeight) / 2;

      ctx.drawImage(logo, x, y, drawWidth, drawHeight);

      texture.needsUpdate = true;
    };

    return texture;
  }, []);

  return texture;
}
