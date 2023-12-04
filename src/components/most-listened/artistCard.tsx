import Image from 'next/image';

interface ArtistCardProps {
  name: string;
  image: string;
}

function ArtistCard({ name, image }: ArtistCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={image}
        alt={name}
        height={640}
        width={640}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h2 className="text-xl text-black font-semibold mb-2">{name}</h2>
    </div>
  );
}

export default ArtistCard;
