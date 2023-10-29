import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>Ada error pada halaman ini !!</div>;
}

export default ErrorPage;
