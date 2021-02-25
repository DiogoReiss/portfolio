import { IProjectCard } from '../utils/types';

export default function ProjectCard({
  name,
  description,
  language,
  html_url,
  styles = ' ',
}: IProjectCard) {
  return (
    <a
      className={`transition duration-200 ease-in flex hover:bg-white transform hover:scale-105 rounded border-2 border-background-color justify-center hover:border-pink-color ${styles}`}
      href={`${html_url}`}
    >
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>Made with: {language}</p>
    </a>
  );
}
