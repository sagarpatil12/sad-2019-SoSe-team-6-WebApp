import React from 'react';


const Search = ({searchChange}) => {
    return (
        <div class="w-100">
        <div class="dib md-form mb-4 pa4 fr" >
        <text class="f3 white">Search Book</text>
  <input class="form-control mr-sm-2 justify-content-center dib " type="text" placeholder="Search" aria-label="Search"
  onChange={searchChange}/>
  {/* <button class="btn white bg-red btn-rounded btn-sm my-1 dib" type="submit">Search</button>   */}

</div>
</div>
    );
}

export default Search;