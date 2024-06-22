import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spidermanNotFound from "../assets/img/spiderman-not-found.png";
const Home = ({ search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leo--marvel--jb29wjf8x9mr.code.run/characters?name=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);
  const notAvailable = "image_not_available";
  return (
    <div className="pt-8 w-full mx-auto">
      {isLoading ? (
        <h1>Merci de patienter</h1>
      ) : (
        <div>
          <h1 className="text-center text-6xl mb-16">Personnages</h1>
          <div className="w-3/4 mx-auto flex flex-wrap justify-between gap-8">
            {data.results.map((element) => {
              return (
                <div key={element._id} className="shadow-box-shadow rounded-lg">
                  <Link to={`/comics/${element._id}`}>
                    {element.thumbnail.path.includes(notAvailable) ? (
                      <div className="flex w-80 h-40 bg-white rounded-lg">
                        <img
                          className="w-1/2 h-full rounded-tl-lg rounded-bl-lg"
                          src={spidermanNotFound}
                          alt="image of comics"
                        />

                        <div className="p-2">
                          <h3 className="font-bold ">{element.name}</h3>
                          <p>
                            {element.description
                              ? `${element.description.substring(0, 20)}...`
                              : "Description non disponible"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex w-80 h-40 bg-white rounded-lg">
                        <img
                          className="w-1/2 rounded-tl-lg rounded-bl-lg"
                          src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                          alt="image of comics"
                        />
                        <div className="p-2">
                          <h3 className="font-bold ">{element.name}</h3>
                          <p>
                            {element.description
                              ? `${element.description.substring(0, 20)}...`
                              : "Description non disponible"}
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
          {data.count === 0 && (
            <p className="text-center">
              Aucun personnages ne correspond à votre recherche ...
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default Home;
