import { Image, Text } from "@react-three/drei";

export default function Card() {
  return (
    <group>
      {/* Background */}
      <mesh>
        <planeGeometry args={[1.6, 2.4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Foto */}
      <Image
        url="/profile.png"
        position={[0, 0.35, 0.01]}
        scale={[0.9, 0.9]}
      />

      {/* Nama */}
      <Text
        position={[0, -0.35, 0.02]}
        fontSize={0.09}
        color="white"
        anchorX="center"
      >
        ELVITA
      </Text>

      {/* Jabatan */}
      <Text
        position={[0, -0.52, 0.02]}
        fontSize={0.05}
        color="#9ca3af"
        anchorX="center"
      >
        Informatics Student
      </Text>
    </group>
  );
}