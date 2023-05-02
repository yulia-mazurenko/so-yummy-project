import { useNavigate } from 'react-router-dom';
import { SearchForm } from '../SearchForm/SearchForm';

export const Search = () => {
  const navigate = useNavigate();
  const addParamsToSearch = searchQuery => {
    navigate(`search?title=${searchQuery}`);
  };

  return <SearchForm addParamsToSearch={addParamsToSearch} />;
};
