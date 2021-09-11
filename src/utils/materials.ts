import * as THREE from 'three'
import GroundImage from '@/assets/ground-material.jpg'
import BallImage from '@/assets/ball-material.png'
import GoalImage from '@/assets/goal-material.png'

import Background from '@/assets/models/background'

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

export function generateBackgroundMaterial() {
  return cubeTextureLoader.load(Background)
}
export function generateGroundMaterial() {
  return new THREE.MeshBasicMaterial({
    map: textureLoader.load(GroundImage)
  })
}
export function generateBallMaterial() {
  return new THREE.MeshLambertMaterial({
    color: '#ffffff',
    map: textureLoader.load(BallImage)
  })
}

export function generateGoalMaterial() {
  const clothTexture = textureLoader.load(GoalImage)
  clothTexture.anisotropy = 16

  const clothMaterial = new THREE.MeshLambertMaterial({
    alphaMap: clothTexture,
    side: THREE.DoubleSide,
    alphaTest: 0.9
  })
  return [
    new THREE.MeshLambertMaterial({
      opacity: 0,
      color: 0x00_00_ff,
      transparent: true
    }),
    clothMaterial,
    clothMaterial,
    clothMaterial,
    clothMaterial,
    clothMaterial
  ]
}
