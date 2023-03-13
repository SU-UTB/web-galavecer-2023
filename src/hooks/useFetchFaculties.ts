import { useEffect, useState } from 'react';
import { api } from '../api';
import { IFacultyItem } from '../lib/interfaces/IFacultyItem';

const useFetchFaculties = () => {
  const [data, setData] = useState<IFacultyItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getData = async () => {
      try {
        const { data } = await api.get('nominations');
        setData(data.faculties);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => abortController.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetchFaculties;
