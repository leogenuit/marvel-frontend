import axios from "axios";
import { useState, useEffect } from "react";

const Comics = ({ search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Get all comics
    const fetchData = async () => {
      const limit = 100;
      const skip = (page - 1) * limit;
      try {
        const response = await axios.get(
          `https://leo--marvel--jb29wjf8x9mr.code.run/comics?title=${search}&limit=${limit}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, page]);

  return (
    <>
      <div className="pt-16 w-full mx-auto bg-gradient-to-l from-blue-light-marvel to-blue-dark-marvel pb-16">
        {isLoading ? (
          <h1 className="text-center text-white">Merci de patienter ...</h1>
        ) : (
          <div>
            <h1 className="text-center text-white text-4xl mb-16">Comics</h1>
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between w-1/3 mx-auto pt-16">
              <button
                className="text-white"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                ← Précendent
              </button>
              <button className="text-white" onClick={() => setPage(page + 1)}>
                Suivant →
              </button>
            </div>
            {data.count === 0 && (
              <div className="min-h-60">
                <p className="text-center text-white">
                  Aucun comics ne correspond à votre recherche ...
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Comics;
