'use client'

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

import dog from '@assets/dog-user.png'
import panda from '@assets/panda-user.png'
import penguin from '@assets/penguin-user.png'
import pig from '@assets/pig-user.png'
import rabbit from '@assets/rabbit-user.png'
import { SelectImageProps } from '@features/selectImage/selectImage.types'

const imageArray = [panda, penguin, rabbit, dog, pig]

export const SelectImage: React.FC<SelectImageProps> = ({ size }) => {
  const [randomImage, setRandomImage] = useState<StaticImageData | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageArray.length)
    setRandomImage(imageArray[randomIndex])
  }, [])

  return <div>{randomImage && <Image src={randomImage} alt="" width={size} height={size} />}</div>
}
