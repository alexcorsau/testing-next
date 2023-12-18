import React, { useEffect, useState } from "react";
import useSWR from "swr";

import Header from "@/components/Header";
import { AppBar } from "@/components/AppBar/AppBar";
interface Human {
  name?: string;
  hair_color?: string;
}

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const Swapi = () => {
  const [swapiResponse, setSwapiResponse] = useState<Human[]>([]);
  const [swapiError, setSwapiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR("https://swapi.dev/api/films", fetcher);
  console.log("data: ", data);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/people")
      .then((r) => r.json())
      .then((data) => {
        setSwapiResponse(data.results);
        console.log("swapi res: ", data.results);
      })
      .catch((e) => setSwapiError(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <AppBar title="Swapi" />
      <ol>
        {data &&
          data.results.map(
            (movie: {
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              director:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <>
                <li>{movie.title}</li>
                <li>{movie.director}</li>
              </>
            )
          )}
      </ol>
      <ul>
        {swapiResponse &&
          swapiResponse.map((e) => (
            <li key={e.name}>
              {e?.name} , {e?.hair_color}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Swapi;
