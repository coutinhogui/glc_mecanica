import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'gallery-1'),
    PlaceHolderImages.find(p => p.id === 'gallery-2'),
    PlaceHolderImages.find(p => p.id === 'gallery-3'),
    PlaceHolderImages.find(p => p.id === 'gallery-4'),
  ].filter(Boolean);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Nossa Oficina</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            image && (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={image.imageUrl}
                  alt="Foto da oficina GLC Mecânica"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover aspect-video"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
