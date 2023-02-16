import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Lord of the Rings",
      description:
        "The Lord of the Rings is a series of three epic fantasy novels written by J.R.R. Tolkien. The books were published in the mid-1940s, but the story takes place in a world known as Middle-earth, thousands of years prior.The trilogy follows hobbit Frodo Baggins as he embarks on a journey to destroy the One Ring, a powerful artifact created by the evil Lord Sauron to control the other rings of power and enslave all of Middle-earth. Along the way, Frodo is joined by a fellowship of characters, including elves, dwarves, humans, and wizards, all of whom are united in their quest to defeat Sauron and",
      posterURL:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873821/the-lord-of-the-rings-9781608873821_hr.jpg",
      rating: 4.5,
      trailor: "https://www.youtube.com/embed/V75dMMIW2B4",
    },
    {
      title: "The Godfather ",
      description:
        "The Godfather is a classic American crime film released in 1972. Directed by Francis Ford Coppola and based on the novel of the same name by Mario Puzo, the film tells the story of the Corleone family, a powerful Italian-American Mafia clan in New York City.The film focuses on the patriarch of the family, Vito Corleone (played by Marlon Brando), also known as The Godfather,and his youngest son, Michael (played by Al Pacino), who becomes the new head of the family after Vito is nearly killed in an assassination attempt. As Michael rises to power, he must navigate the dangerous world of organized crime and make tough decisions to protect his family and maintain their hold on the Mafia.",
      posterURL:
        "https://i.etsystatic.com/27089413/r/il/33219f/3970726212/il_fullxfull.3970726212_6vfi.jpg",
      rating: 3.5,
      trailor: "https://www.youtube.com/embed/UaVTIH8mujA",
    },
    {
      title: "12 Angry Men",
      description:
        "12 Angry Men is a 1957 American drama film directed by Sidney Lumet. The film is set entirely in a jury room and follows a group of 12 jurors as they deliberate over the verdict in a murder trial.At the beginning of the film, all but one of the jurors believe that the defendant is guilty, but as the deliberation progresses, several jurors start to have doubts about the evidence presented in the trial. Through intense debates and discussions, the jurors are forced to reexamine their own biases and beliefs, and come to a decision about the verdict.",
      posterURL:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/513TT8BMNFL._AC_UF894,1000_QL80_.jpg",
      rating: 5.0,
      trailor: "src=https://www.youtube.com/embed/TEN-2uTi2c0",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList
        movies={movies}
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
      />
      <button
        onClick={() =>
          addMovie({
            title: "New Movie",
            description: "Description of new movie",
            posterURL: "",
            rating: 5.0,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
};

export default App;
