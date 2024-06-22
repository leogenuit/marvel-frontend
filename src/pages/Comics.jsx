import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comics = ({ search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([""]);
  const { comicId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leo--marvel--jb29wjf8x9mr.code.run/comics?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  const pushComicsIdToMongo = async () => {
    try {
      const response = await axios.post("http://localhost:4000/favorites", {
        name: "re",
      });

      console.log(response.data);
    } catch (error) {}
  };

  const getComicsId = async (id) => {
    pushComicsIdToMongo();
    try {
      const response = await axios.get(
        `https://leo--marvel--jb29wjf8x9mr.code.run/comic/${id}`
      );
      const comicId = response.data._id;
      const copy = [...favorites];
      copy.push(comicId);
      setFavorites(copy);
      console.log(favorites);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pt-8 w-full mx-auto bg-gradient-to-r from-blue-light-marvel to-blue-dark-marvel">
        {isLoading ? (
          <h1>Merci de patienter</h1>
        ) : (
          <div>
            {favorites}
            <h1 className="text-center text-white text-6xl mb-16">Comics</h1>
            {/* <img src={comicsImage} alt="" className="w-1/4 mx-auto mb-16" /> */}

            <div className="w-3/4 mx-auto flex flex-wrap justify-between gap-8 ">
              {data.results.map((element, index) => {
                return (
                  <div
                    key={element._id}
                    className="shadow-box-shadow rounded-lg "
                  >
                    <div className="flex w-80 bg-white rounded-lg">
                      <img
                        className="w-1/2 rounded-tl-lg rounded-bl-lg"
                        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                        alt="image of comics"
                      />
                      <div className="p-2">
                        <h3 className="font-bold ">{element.title}</h3>
                        <p className="italic">
                          {element.description
                            ? element.description.substring(0, 40)
                            : "Description non disponible"}
                        </p>
                        <button onClick={() => getComicsId(element._id)}>
                          click
                        </button>
                      </div>
                    </div>
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
    </>
  );
};
export default Comics;
