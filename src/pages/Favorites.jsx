import axios from "axios";
import { useState, useEffect } from "react";
const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get all favorites
    const fetchAllFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:4000/favorites-all");
        setFavorites(response.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchAllFavorites();
  }, []);

  useEffect(() => {
    if (favorites !== null) {
    }
  }, [favorites]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div className="w-full mx-auto pt-56 pb-56 mx-auto pb-16 bg-gradient-to-l from-blue-light-marvel to-blue-dark-marvel">
          <h1 className="text-center text-white text-4xl">
            Retrouvez bientôt la liste de vos favoris ...
          </h1>
          {/* <div>
            {favorites.map((element) => {
              return (
                <div>
                  <p>{element._id}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Favorites;
