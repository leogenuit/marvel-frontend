import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import personnageImage from "../assets/img/personnage-img.png";
const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const characterId = useParams();
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
  const notAvailable = "image_not_available";
  return (
    <div className="w-3/4 mx-auto">
      {isLoading ? (
        <h1>Merci de patienter</h1>
      ) : (
        <div>
          {/* <h1 className="text-center text-6xl mb-16">Personnage</h1> */}
          <img src={personnageImage} alt="" className="w-2/4 mx-auto mb-16" />
          <div className="flex flex-wrap justify-between gap-8">
            {data.results.map((element) => {
              return (
                <div
                  key={element._id}
                  className="shadow-box-shadow rounded-lg w-1/4"
                >
                  <Link to={`/comics/${element._id}`}>
                    {element.thumbnail.path.includes(notAvailable) ? null : (
                      <div className="flex w-80 bg-white rounded-lg">
                        <img
                          className="w-full h-full rounded-tl-lg rounded-bl-lg  max-h-52"
                          src={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                          alt="image of comics"
                        />
                        <div className="p-2">
                          <h3 className="font-bold ">{element.name}</h3>
                          <p className=" ">
                            {" "}
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
        </div>
      )}
    </div>
  );
};
export default Home;
