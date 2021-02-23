interface IimageCardProps {
  src: string;
  alt: string;
  cardStyle?: string;
  imgStyle?: string;
}

export default function ImageCard({
  src,
  alt,
  cardStyle = 'flex rounded border-2 border-pink-color mx-2 justify-center',
  imgStyle = 'opacity-100',
}: IimageCardProps) {
  return (
    <div className={`${cardStyle}`}>
      <img src={`${src}`} alt={`${alt}`} className={`${imgStyle}`} />
    </div>
  );
}
