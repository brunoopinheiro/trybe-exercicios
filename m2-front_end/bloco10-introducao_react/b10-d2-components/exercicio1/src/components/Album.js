import React from "react";

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section>
        <img src={ album.image } alt={ album.title } />
        <h2>{ album.title}</h2>
        <p>{ album.releaseDate.year }</p>
        <p>
          Release: 
          { ` ${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
        </p>
        <p>Label: { album.others.recordCompany }</p>
        <p>Formats: { album.others.formats }</p>        
      </section>
    );
  }
}

export default Album;
