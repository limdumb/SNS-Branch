// 1. post를 한다
// 2. response를 받는다 ( status code )
// 3. status code와 error와 loading을 Return한다

import { axiosInstance } from "@/api/instance";
import { useEffect, useState } from "react";

interface PostProps<T> {
  requestUrl: string;
  requestData: T;
}

interface ResponseType {
  status: number | null;
  error: string | null;
  isLoading: boolean;
}

export default function usePost<T>(props: PostProps<T>): ResponseType {
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPostResponse = async () => {
      try {
        const response = await axiosInstance.post(props.requestUrl);
        setStatus(response.status);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    getPostResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, error, isLoading };
}
