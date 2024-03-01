import { useState, useEffect } from "react";
import { IPost } from "../interface";
import { useDispatch } from "react-redux";
import { setState } from "../redux/postList";

export const usePostList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    async function getPosts(): Promise<void> {
      const responce: Response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const json: IPost[] = await responce.json();
      setIsLoading(false);
      dispatch(setState(json));
    }
    try {
      getPosts();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }, [dispatch]);

  return { isLoading, error };
};
