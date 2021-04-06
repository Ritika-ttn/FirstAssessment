import ApiTypes from './types';
export const listing = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    {
      console.log('Page: ', page);
    }
    const data = await response.json();
    // const result = data.results;
    dispatch({
      type: ApiTypes.List_Api,
      payload: data.results,
    });
  } catch (error) {
    alert('Get Error');
  }
};
export const genre = () => async (dispatch) => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US',
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.GENRE,
      payload: result,
    });
  } catch (error) {
    alert('Error');
  }
};

export const release = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.RELEASE,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};

export const old = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.OLD,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};
export const mostpopular = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.MOSTPOPULAR,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};

export const lesspopular = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.LESSPOPULAR,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};
export const highrevenue = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.HIGHREVENUE,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};

export const lessrevenue = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68c65e2615ae37d7b27419b3813e8930&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=${page}`,
      {
        method: 'GET',
      },
    );
    const result = await response.json();
    dispatch({
      type: ApiTypes.LESSREVENUE,
      payload: result.results,
    });
  } catch (error) {
    alert('Error');
  }
};

// export const language = () => async (dispatch) => {
//   try {
//     const response = await fetch(
//       'https://api.themoviedb.org/3/configuration/languages?api_key=68c65e2615ae37d7b27419b3813e8930',
//       {
//         method: 'GET',
//       },
//     );
//     const result = await response.json();
//     dispatch({
//       type: ApiTypes.LANGUAGES,
//       payload: result,
//     });
//   } catch (error) {
//     alert('Language Error');
//   }
// };
