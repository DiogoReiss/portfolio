import { IProjectCard } from '../utils/types';
import { connect } from 'react-redux';

var projectRepoCard =
  'w-9/12 flex flex-col items-center font-mono font-semibold row-end-auto text-center text-xs md:text-base';

let ProjectCard = ({ data }) =>
  data ? (
    <>
      <h1 className="flex font-header text-background-color font-semibold mb-6 ml-3/12 lg:ml-24 md:self-start text-base md:text-xl lg:text-3xl">
        Now you can see my{' '}
        <strong className="text-pink-color ml-2 font-semibold">
          repositories
        </strong>
        .
      </h1>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
        {data.data.map(
          ({ id, name, description, language, html_url }: IProjectCard) => {
            return (
              <a
                className={`transition duration-200 ease-in flex hover:bg-white transform hover:scale-105 rounded border-2 border-background-color justify-center hover:border-pink-color ${projectRepoCard}`}
                href={`${html_url}`}
                key={id}
              >
                <h1>{name}</h1>
                <h2 className="text-gray-700">{description}</h2>
                <p className="text-gray-700">Made with: {language}</p>
              </a>
            );
          }
        )}
      </div>
    </>
  ) : null;

const mapStateToProps = (state) => ({ data: state.repos });
ProjectCard = connect(mapStateToProps, null)(ProjectCard);

export default ProjectCard;
