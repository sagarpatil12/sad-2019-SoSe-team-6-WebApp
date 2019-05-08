import React from 'react';


const Search = ({searchChange}) => {
    return (
        <div class="dib md-form mb-4 pa4 fr" >
  <input class="form-control mr-sm-2 justify-content-center dib " type="text" placeholder="Search" aria-label="Search"
  onChange={searchChange}/>
  {/* <button class="btn white bg-red btn-rounded btn-sm my-1 dib" type="submit">Search</button>   */}

</div>
    );
}

export default Search;