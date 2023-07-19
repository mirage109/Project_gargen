import { NotFound } from "../../components/NotFound";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
    console.log(error);
  return (
    <>
      <NotFound />
    </>
  );
};
