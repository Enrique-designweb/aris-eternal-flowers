"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls, useGLTF } from "@react-three/drei";

interface ProductViewer3DProps {
  /** Ruta al modelo .glb (por ejemplo "/models/rosa.glb"). */
  modelUrl?: string;
  /** Texto accesible / de fallback. */
  alt?: string;
  className?: string;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export function ProductViewer3D({
  modelUrl,
  alt = "Modelo 3D",
  className = "",
}: ProductViewer3DProps) {
  if (!modelUrl) {
    return (
      <div className={`viewer-3d viewer-3d-empty ${className}`} role="img" aria-label={alt}>
        <span>Modelo 3D no disponible</span>
      </div>
    );
  }

  return (
    // data-lenis-prevent: la rueda hace zoom en el modelo en lugar de mover la página
    <div aria-label={alt} className={`viewer-3d ${className}`} data-lenis-prevent role="img">
      <Canvas camera={{ fov: 45, position: [0, 0, 5] }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.25}>
            <Model url={modelUrl} />
          </Bounds>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
