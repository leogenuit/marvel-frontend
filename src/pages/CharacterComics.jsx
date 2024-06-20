import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterComics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchAllComicsByOneCharacter = async () => {
      const response = await axios.get(
        `http://localhost:4000/comics/${characterId}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchAllComicsByOneCharacter();
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      {isLoading ? (
        <p>chargement en cours ...</p>
      ) : (
        <div className="flex flex-wrap">
          {data.comics.map((comic) => {
            return (
              <div key={comic._id} className="w-1/4 p-2">
                <p className="text-center italic">{comic.title}</p>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt="image of comics"
                  className="w-full"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterComics;
