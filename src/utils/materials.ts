import * as THREE from 'three'
import GroundImage from '@/assets/ground-material.jpg'
import BallImage from '@/assets/ball-material.png'
import SkyImage from '@/assets/sky-material.jpg'

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

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
export function generateSkyMaterial() {
  return new THREE.MeshBasicMaterial({
    map: textureLoader.load(SkyImage)
  })
}
