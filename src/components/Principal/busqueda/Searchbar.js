import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

class Searchbar extends React.Component {
  handleChange = event => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            style={{
              position: "absulote",
              width: "40ch",
              left: "28ch",
              color: "white"
            }}
            onChange={this.handleChange}
            color="secondary"
            id="input-with-icon-textfield"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </form>
      </>
    );
  }
}
export default Searchbar;
