import { useParams } from 'react-router-dom';

function SearchPage() {
  const { city } = useParams();

  return <span>User Searched for {city}</span>;
}

export default SearchPage;
