import React from "react";
import { Route, Switch } from "wouter";

import Login from "./components/Login/LoginContainer";
import Principal from "./components/Principal/PrincipalContainer";
import UserContextProvider from "./context/UserContext";

import youtube from "./Api/youtube";
import SearchBar from "./components/Youtube/Searchbar";
import VideoList from "./components/Youtube/VideoList";
import VideoDetail from "./components/Youtube/VideoDetail";

import "./App.css";
import "./video.css";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async termFromSearchBar => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar
      }
    });

    this.setState({
      videos: response.data.items
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <UserContextProvider>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/inicio">
            <Principal />
            <SearchBar handleFormSubmit={this.handleSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />
          </Route>
        </Switch>
      </UserContextProvider>
    );
  }
}

export default App;
