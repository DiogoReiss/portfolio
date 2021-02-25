export interface IProjectCard {
  name: string;
  description: string;
  language: string;
  html_url: string;
  styles?: string;
}

export interface IRepo {
  data: [
    {
      name: string;
      description: string;
      language: string;
      html_url: string;
      styles?: string;
    }
  ];
}

export interface IimageCardProps {
  src: string;
  alt: string;
  cardStyle?: string;
  imgStyle?: string;
}
