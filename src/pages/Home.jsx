import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
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
                  {element.thumbnail.path.includes("image_not_available") ? (
                    ""
                  ) : (
                    <div className="flex w-96 h-4/5">
                      <img
                        className="w-2/4 h-5/5  object-cover rounded-tl-lg rounded-bl-lg"
                        src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                        alt="image of comics"
                      />
                      <div className="p-2">
                        <h3 className="font-bold ">{element.name}</h3>
                        <p className=" ">{element.description}</p>
                      </div>
                    </div>
                  )}
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
