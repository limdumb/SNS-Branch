import { axiosInstance } from "@/api/instance";
import { useEffect, useState } from "react";

interface UseFetchType {
  fetchUrl: string;
}

interface ResponseType<T> {
  data: T | null;
  error: { code: number; message: string } | null;
  isLoading: boolean;
}

export function useFetch<T>(fetchProps: UseFetchType): ResponseType<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<{ code: number; message: string } | null>(
    null
  );

  useEffect(() => {
    const getFetchData = async () => {
      try {
        const response = await axiosInstance.get(fetchProps.fetchUrl);
        setData(response.data);
        setLoading(false);
      } catch (err) {

        if (err instanceof Error) {
          setError({
            code: 500,
            message:
              err.message ||
              "[ERROR]: 알수없는 에러가 발생했습니다. 다음에 다시 시도해주세요",
          });
        }

        setLoading(false);
      }
    };

    getFetchData();
  }, [fetchProps.fetchUrl]);

  return { data, isLoading, error };
}
