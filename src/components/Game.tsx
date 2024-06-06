import { useRef, useState, useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Plane, Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

import { Enemy } from "./Enemy";
import { Player } from "./Player";

export const Game = () => {
  const player = useRef<any>(null!);
  const enemyLight = useRef<THREE.PointLight>(null!);
  const pathLength = useRef(1);

  const [obstacles, setObstacles] = useState<JSX.Element[]>([]);
  const [pathSections, setPathSections] = useState<JSX.Element[]>([
    <RigidBody type="fixed" name="floor" key={0}>
      <Box position={[0, 0, 0]} args={[30, 1, 10]} receiveShadow>
        <meshStandardMaterial color="#222" />
      </Box>
    </RigidBody>,
  ]);

  const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomPathSection = (xPosition: number) => {
    const randomHeight = getRandomInt(-2, 2);
    const obstaclesCount = getRandomInt(1, 5);

    const obstacles = [];
    const occupiedPositionsInSection: number[] = [];

    for (let i = 0; i < obstaclesCount; i++) {
      const randomObstacleType = getRandomInt(1, 3);
      let obstaclePosition;
      do {
        obstaclePosition = getRandomInt(-10, 10);
      } while (occupiedPositionsInSection.includes(obstaclePosition));

      occupiedPositionsInSection.push(obstaclePosition);

      const obstacle = (type: number) => {
        switch (type) {
          case 1:
            return (
              <Box
                name="floor"
                position={[
                  xPosition + obstaclePosition,
                  randomHeight + getRandomInt(0, 2),
                  0,
                ]}
                args={[2, randomHeight + getRandomInt(0, 2), 2]}
                receiveShadow
                rotation={[0, Math.PI / 2, 0]}
              >
                <meshStandardMaterial color="yellow" />
              </Box>
            );
          case 2:
            return (
              <Box
                name="floor"
                position={[
                  xPosition + obstaclePosition,
                  randomHeight + getRandomInt(0, 2),
                  0,
                ]}
                args={[2, randomHeight, 1]}
                rotation={[0, Math.PI / 2, 0]}
                receiveShadow
              >
                <meshStandardMaterial color="lime" />
              </Box>
            );
          case 3:
            return (
              <Box
                name="floor"
                position={[
                  xPosition + obstaclePosition,
                  randomHeight + getRandomInt(0, 2),
                  0,
                ]}
                args={[1, 2, 2]}
                receiveShadow
              >
                <meshStandardMaterial color="white" />
              </Box>
            );
          default:
            return null;
        }
      };

      const newObstacle = obstacle(randomObstacleType);
      if (newObstacle) {
        obstacles.push(newObstacle);
      }
    }

    return (
      <RigidBody type="fixed" name="floor" key={xPosition}>
        <Box position={[xPosition, 0, 0]} args={[30, 1, 10]} receiveShadow>
          <meshStandardMaterial color="#222" />
        </Box>

        {/* <Plane
          position={[xPosition, randomHeight + 2, 1]}
          args={[30, 99]}
          receiveShadow
        >
          <meshStandardMaterial transparent opacity={0} />
        </Plane>
        <Plane
          position={[xPosition, randomHeight + 2, -1]}
          args={[30, 99]}
          receiveShadow
        >
          <meshStandardMaterial transparent opacity={0} />
        </Plane> */}
        {/* {obstacles} */}
      </RigidBody>
    );
  };

  const addPathSection = () => {
    const newXPosition = pathLength.current * 30;
    const newSection = getRandomPathSection(newXPosition);

    setPathSections((prev) => [...prev, newSection]);
    pathLength.current += 1;
  };

  const randomGeometry = () => {
    const geometries = [
      <Box args={[1, 1, 1]} castShadow>
        <meshStandardMaterial color="red" />
        <pointLight
          ref={enemyLight}
          intensity={1}
          position={[0, 0.5, 0]}
          color="red"
        />
      </Box>,
      <Sphere args={[0.5, 32, 32]} castShadow>
        <meshStandardMaterial color="red" />
        <pointLight
          ref={enemyLight}
          intensity={1}
          color="red"
          position={[0, 1, 0]}
        />
      </Sphere>,
      <mesh geometry={new THREE.TetrahedronGeometry(0.5)} castShadow>
        <meshStandardMaterial color="red" />
        <pointLight
          ref={enemyLight}
          intensity={1}
          color="red"
          position={[0, 0.25, 0]}
        />
      </mesh>,
      <mesh geometry={new THREE.ConeGeometry(0.5, 1, 32)} castShadow>
        <meshStandardMaterial color="red" />
        <pointLight
          ref={enemyLight}
          intensity={1}
          color="red"
          position={[0, 0.5, 0]}
        />
      </mesh>,
    ];
    return geometries[Math.floor(Math.random() * geometries.length)];
  };

  const spawnObstacle = useCallback(() => {
    const id = uuidv4();
    const playerPosition = player.current.translation();

    const position = [
      playerPosition.x + Math.random() + 20,
      getRandomInt(playerPosition.y, 10),
      playerPosition.z,
    ];

    const geometry = randomGeometry();

    const newObstacle = (
      <Enemy
        key={id}
        position={new THREE.Vector3(position[0], position[1], position[2])}
        geometry={geometry}
      />
    );
    setObstacles((prev) => [...prev, newObstacle]);
    setTimeout(() => {
      setObstacles((prev) => prev.filter((obstacle) => obstacle.key !== id));
    }, 6000);
  }, []);

  // useEffect(() => {
  //   const spawnRate = setInterval(spawnObstacle, 1500);
  //   return () => clearInterval(spawnRate);
  // }, [spawnObstacle]);

  return (
    <>
      <Player
        player={player}
        addPathSection={addPathSection}
        pathLength={pathLength}
      />

      {pathSections}
      {obstacles}
    </>
  );
};
