import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function F1CarWireframe() {
  const groupRef = useRef();

  const materialProps = {
    color: "#FB3640",
    wireframe: true,
    emissive: "#FB3640",
    emissiveIntensity: 0.8
  };

  useEffect(() => {
    if (groupRef.current) {
      // Animate the car scaling and rotating based on scroll
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        x: Math.PI / 4,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });
      
      gsap.to(groupRef.current.position, {
        z: 4, // Drive towards camera on scroll
        y: -1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });
    }
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle hovering rotation
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
        
        {/* Main Chassis */}
        <Box args={[0.8, 0.4, 3.5]} position={[0, 0.2, 0]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        
        {/* Nose Cone */}
        <Box args={[0.5, 0.3, 1.5]} position={[0, 0.15, 2.5]}>
          <meshStandardMaterial {...materialProps} />
        </Box>

        {/* Cockpit / Halo area */}
        <Box args={[0.6, 0.4, 1.2]} position={[0, 0.6, -0.2]}>
          <meshStandardMaterial {...materialProps} />
        </Box>

        {/* Engine Cover / Airbox */}
        <Box args={[0.4, 0.5, 1.5]} position={[0, 0.8, -1.2]}>
          <meshStandardMaterial {...materialProps} />
        </Box>

        {/* Front Wing */}
        <Box args={[2.2, 0.1, 0.6]} position={[0, 0.05, 3.2]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        {/* Front Wing Endplates */}
        <Box args={[0.05, 0.4, 0.8]} position={[1.1, 0.2, 3.2]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        <Box args={[0.05, 0.4, 0.8]} position={[-1.1, 0.2, 3.2]}>
          <meshStandardMaterial {...materialProps} />
        </Box>

        {/* Rear Wing */}
        <Box args={[1.8, 0.1, 0.6]} position={[0, 1.1, -1.6]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        {/* Rear Wing Pillars */}
        <Box args={[0.05, 0.8, 0.4]} position={[0.4, 0.6, -1.6]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        <Box args={[0.05, 0.8, 0.4]} position={[-0.4, 0.6, -1.6]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        {/* Rear Wing Endplates */}
        <Box args={[0.05, 0.6, 0.8]} position={[0.9, 0.9, -1.6]}>
          <meshStandardMaterial {...materialProps} />
        </Box>
        <Box args={[0.05, 0.6, 0.8]} position={[-0.9, 0.9, -1.6]}>
          <meshStandardMaterial {...materialProps} />
        </Box>

        {/* Wheels */}
        {/* Front Right */}
        <Cylinder args={[0.4, 0.4, 0.3, 16]} rotation={[0, 0, Math.PI / 2]} position={[0.9, 0.4, 2.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>
        {/* Front Left */}
        <Cylinder args={[0.4, 0.4, 0.3, 16]} rotation={[0, 0, Math.PI / 2]} position={[-0.9, 0.4, 2.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>
        
        {/* Rear Right */}
        <Cylinder args={[0.5, 0.5, 0.4, 16]} rotation={[0, 0, Math.PI / 2]} position={[1.1, 0.5, -1.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>
        {/* Rear Left */}
        <Cylinder args={[0.5, 0.5, 0.4, 16]} rotation={[0, 0, Math.PI / 2]} position={[-1.1, 0.5, -1.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>

        {/* Axles */}
        <Cylinder args={[0.05, 0.05, 1.8, 8]} rotation={[0, 0, Math.PI / 2]} position={[0, 0.4, 2.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>
        <Cylinder args={[0.05, 0.05, 2.2, 8]} rotation={[0, 0, Math.PI / 2]} position={[0, 0.5, -1.2]}>
          <meshStandardMaterial {...materialProps} />
        </Cylinder>
      </group>
    </Float>
  );
}

function Particles() {
  const count = 600;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30; 
    }
    return pos;
  }, [count]);

  const pointsRef = useRef();

  useEffect(() => {
    if (pointsRef.current) {
      gsap.to(pointsRef.current.rotation, {
        y: Math.PI * 2,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });
    }
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#FB3640" 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 4, 10], fov: 60 }}>
        <color attach="background" args={['#000F08']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FB3640" />
        <F1CarWireframe />
        <Particles />
      </Canvas>
    </div>
  );
}
