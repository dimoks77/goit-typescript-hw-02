import axios from 'axios';

// Определяем типы для аргументов функции fetchData
type FetchDataArgs = {
  query: string;
  page: number;
  setPhotos: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export async function fetchData({
  query,
  page,
  setPhotos,
  setLoading,
  setError
}: FetchDataArgs): Promise<void> {
  try {
    setLoading(true);
    const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
      params: {
        client_id: 'sSw2A24lCtgMKKWaGbVZZ3GjpqcpzhpoZDxANpcbn30',
        query: query,
        per_page: 12,
        page: page,
        orientation: 'landscape',
      },
    });
    setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
  } catch (error: any) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
