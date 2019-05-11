import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./components/Catalog";
import Landing from "./components/Landing ";
import MovieDetail from "./components/MovieDetail ";

class App extends Component {
  constructor() {
    super();
    this.state = {
      budget: 10,
      catalog: [
        {
          id: 0,
          isRented: false,
          title: "Tarzan",
          year: 1999,
          img:
            "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
          descrShort:
            "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."
        },
        {
          id: 1,
          isRented: false,
          title: "The Lion King",
          img:
            "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
          year: 1994,
          descrShort:
            "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."
        },
        {
          id: 2,
          isRented: false,
          title: "Beauty and the Beast",
          year: 1991,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
          descrShort:
            "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."
        },
        {
          id: 3,
          isRented: false,
          title: "The Sword in the Stone",
          year: 1963,
          img:
            "https://musicart.xboxlive.com/7/8f4d1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
          descrShort:
            "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."
        },
        {
          id: 4,
          isRented: false,
          title: "Beauty and the Beast",
          year: 2016,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
          descrShort:
            "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."
        },
        {
          id: 5,
          isRented: false,
          title: "Peter Pan",
          year: 1954,
          img:
            "https://is5-ssl.mzstatic.com/image/thumb/Video115/v4/63/fa/37/63fa3745-fa49-3a6b-f805-737c5e9a7f7f/pr_source.lsr/268x0w.png",
          descrShort:
            "Peter Pan is a 1953 American animated fantasy adventure film produced by Walt Disney and based on the play Peter Pan, or The Boy Who Wouldn't Grow Up by J. M. Barrie. It is the 14th Disney animated feature film and was originally released on February 5, 1953, by RKO Radio Pictures. Peter Pan is the final Disney animated feature released through RKO before Walt Disney's founding of his own distribution company, Buena Vista Distribution, later in 1953 after the film was released. Peter Pan is also the final Disney film in which all nine members of Disney's Nine Old Men worked together as directing animators. It is also the second Disney animated film starring Kathryn Beaumont, Heather Angel, and Bill Thompson after their roles in the animated feature Alice in Wonderland."
        },
        {
          id: 6,
          isRented: false,
          title: "Toy Story",
          year: 1995,
          img:
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg",
          descrShort:
            "Toy Story is a 1995 American computer-animated adventure comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The feature-film directorial debut of John Lasseter, it was the first feature-length film to be entirely computer-animated, as well as the first feature film from Pixar"
        },
        {
          id: 7,
          isRented: false,
          title: "Mulan",
          year: 1998,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/91G57FBjIxL._SL1500_.jpg",
          descrShort:
            "Mulan is a 1998 American animated musical action adventure film produced by Walt Disney Feature Animation for Walt Disney Pictures. It is based on the Chinese legend of Hua Mulan, and was Disney's 36th animated feature and the ninth animated film produced and released during the Disney Renaissance. It was directed by Tony Bancroft and Barry Cook, with story by Robert D. San Souci and screenplay by Rita Hsiao, Philip LaZebnik, Chris Sanders, Eugenia Bostwick-Singer, and Raymond Singer"
        },
      ]
    }
  }

  rentMovie = m => {
    let newCatalog = [...this.state.catalog];
    newCatalog[m].isRented = !newCatalog[m].isRented;

    this.setState(
      {
        catalog: newCatalog
      },
      function() {
        console.log(this.state.catalog)
      }
    )
  }

  render() {
    return (
      <Router>
        <div id="main-links">
          <Link to="/" id = "home">Home</Link>
          <Link to="/catalog" id= "catalog">Catalog</Link>
          <div id="logo">REFLIX</div>
        </div>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/movies/:id"
          render={({ match }) => (
            <MovieDetail
              key={this.state.catalog.id}
              match={match}
              catalog={this.state.catalog}
            />
          )}
        />
        <Route
          exact
          path="/catalog"
          render={() => (
            <Catalog
              rentMovie={this.rentMovie}
              catalog={this.state.catalog}
              key={this.state.catalog.id}
              budget={this.state.budget}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
