import historyService from '../../services/graphQL/history';
import { useQuery } from '@apollo/client';

const TestPage = () => {
  const { loading, data } = useQuery(historyService.histories(5, 0));
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="not-found">
      <h1>this is a test page</h1>
      <div>Data received</div>
      {console.log(data)}
    </div>
  );
};

export default TestPage;
