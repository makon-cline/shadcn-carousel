import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  CarouselSlideList,
  CarouselSlider,
} from '@/components/Carousel';

const inter = Inter({ subsets: ['latin'] });

const WIDTH = 600;
const HEIGHT = 400;
const slides = Array.from({ length: 6 }).map((_, i) => ({
  src: `https://placehold.co/${WIDTH}x${HEIGHT}?text=${i + 1}`,
  alt: `Placeholder ${i + 1}`,
}));

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Carousel>
        <div className="relative flex items-center justify-center">
          <CarouselPrevious />
          <CarouselSlideList className={`w-[600px]`}>
            {slides.map(({ src, alt }, i) => (
              <CarouselSlide key={i}>
                <Image
                  src={src}
                  alt={alt}
                  width={WIDTH}
                  height={HEIGHT}
                  unoptimized
                />
              </CarouselSlide>
            ))}
          </CarouselSlideList>
          <CarouselNext />
        </div>
        <CarouselSlider />
      </Carousel>
    </main>
  );
}
