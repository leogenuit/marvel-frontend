import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { characterId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:4000/character/${id}`
        // );
        const response = await axios.get(
          `http://localhost:4000/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      {isLoading ? (
        <p>chargement en cours </p>
      ) : (
        <div className="flex shadow-box-shadow rounded-lg">
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="image charactere"
            className="w-1/3 rounded-tl-lg rounded-bl-lg"
          />
          <div>
            <div>
              {data.comics.map((comic) => {
                <p>{comic}</p>;
              })}
            </div>
            {data.description ? (
              <p className="p-4">{data.description}</p>
            ) : (
              <p className="p-4">
                Oups on dirait que ce personnage n'a pas encore de description
                ...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
