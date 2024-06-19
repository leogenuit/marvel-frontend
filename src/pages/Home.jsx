import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
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
        <h1>Merci de patienter</h1>
      ) : (
        <div className="flex flex-wrap justify-between gap-8">
          {data.results.map((element) => {
            return (
              <div key={element._id} className="shadow-box-shadow rounded-lg ">
                <Link to="#">
                  <div className="flex w-96">
                    <img
                      className="w-40  rounded-tl-lg rounded-bl-lg"
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
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;
