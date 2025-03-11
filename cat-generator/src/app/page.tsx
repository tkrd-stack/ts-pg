'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImage().then((image) => {
      setImageUrl(image.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };
  return (
    <div className={styles.page}>
      <h1>Random Cat Image</h1>
      <div>{loading || <img src={imageUrl} />} </div>
      <button onClick={handleClick}>他のにゃんこもみる</button>
      <div>so cute & so lovely</div>
    </div>
  );
}

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images = await res.json();
  console.log(images);
  return images[0];
};

fetchImage().then((image) => {
  console.log(image.url);
});
