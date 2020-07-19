import _ from 'lodash';

import api from '../apis/index';

export const fetchPosts = () => {

    return async (dispatch, getState) => {
        // const response = await mockApi();

        const response = await api.get('/posts');

        dispatch ({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

// export const fetchUser = (id) => {
//     return async (dispatch, getState) => {
//         const response = await api.get(`/users/${id}`);
        
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         });
//     }
// }


export const fetchUser = (id) => {
    return (dispatch) => {
        _fetchUser(id, dispatch);
    }
}

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// }

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await api.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});

// const mockApi = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 data: [1,2,3,4,5]
//             });
//         }, 2000)
//     });
// }