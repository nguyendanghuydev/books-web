import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

const Home: NextPage = () => {
  const { name } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return <div>name</div>;
};

export default Home;
