import axios from "axios";
import { useState, useEffect } from "react";
const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      console.log("Favorites updated:", favorites);
    }
  }, [favorites]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div className="w-3/4 mx-auto border-2">
          <h1 className="text-center">Favorites</h1>
          <div>
            {favorites.map((element) => {
              return (
                <div>
                  <p>{element._id}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
