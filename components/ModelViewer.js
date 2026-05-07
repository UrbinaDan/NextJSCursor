import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Center } from '@react-three/drei';

function Model({ path, scale, position, rotation }) {
  const { scene } = useGLTF(path);

  return (
    <Center>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </Center>
  );
}

export default function ModelViewer({
  path,
  scale = 1.5,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  showDebug = false,
}) {
  return (
    <div className="relative h-64 w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ toneMappingExposure: 0.7 }}>        
        <ambientLight intensity={2} />
        <directionalLight position={[3, 3, 3]} intensity={3} />
        <directionalLight position={[-3, -2, -3]} intensity={1.5} />

        <Model
          path={path}
          scale={scale}
          position={position}
          rotation={rotation}
        />

        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />

        <Environment preset="city" />
      </Canvas>

      {showDebug && (
        <div className="absolute left-2 top-2 rounded-lg border border-white/10 bg-black/70 p-2 text-left text-[10px] leading-4 text-gray-200">
          <p>scale: {JSON.stringify(scale)}</p>
          <p>position: {JSON.stringify(position)}</p>
          <p>
            rotation: [
            {rotation.map((value) => Number(value).toFixed(2)).join(', ')}
            ]
          </p>
        </div>
      )}
    </div>
  );
}