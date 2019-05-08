import React from 'react';


const Search = () => {
    return (
        <div class="dib md-form mb-4 pa4 input-group w-30" >
  <input class="form-control mr-sm-2 w-100" type="text" placeholder="Search" aria-label="Search"/>
  <span class='input-gropu-btn'>
  <button class="btn white bg-red btn-rounded btn-sm my-1" type="submit">Search</button>  
  </span>
</div>
    );
}

export default Search;