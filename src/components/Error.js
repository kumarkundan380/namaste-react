import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>Something went worng!!</h2>
            <h3>{err.status}:{err.statusText}</h3>
            <h2>{err.data}</h2>
        </div>
    );
};

export default Error;