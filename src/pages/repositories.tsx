import { NextPage } from 'next';
import Layout from '../components/layout';
import Loading from '../components/loading';
import ProjectCard from '../components/projectCard';
import { IRepo } from '../utils/types';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../redux/reducers';
import rootSaga from '../redux/sagas';
import getRepo from '../redux/actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(getRepo());

const Repositories: NextPage<IRepo> = () => {
  return (
    <Provider store={store}>
      <Layout title="Projects" actualPage="GITHUB">
        <div className="flex flex-row w-screen h-full justify-center">
          <section className="flex flex-col justify-center items-center flex-1">
            <Loading loading />
            <ProjectCard data />
          </section>
          <section
            className="flex-1 justify-center w-full mr-0 hidden md:flex
        "
          >
            <img
              src="images/page3.png"
              className="flex self-center h-full justify-self-end mr-0 md:visible"
              alt="cyborg image by Icons8"
            />
          </section>
        </div>
      </Layout>
    </Provider>
  );
};

export default Repositories;
