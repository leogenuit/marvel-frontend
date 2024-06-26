import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterComics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    // Get all Comics by one characters
    const fetchAllComicsByOneCharacter = async () => {
      try {
        const response = await axios.get(
          `https://leo--marvel--jb29wjf8x9mr.code.run/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllComicsByOneCharacter();
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      {isLoading ? (
        <p>chargement en cours ...</p>
      ) : (
        <div>
          <div className="flex flex-wrap pt-32">
            {data.comics.map((comic) => {
              return (
                <div key={comic._id} className="w-1/4 p-2 ">
                  <p className="text-center italic">
                    {comic.title.substring(0, 36)}
                  </p>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt="image of comics"
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterComics;
