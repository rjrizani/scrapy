// fungsi memaanggil state case pada todo
const _add = () => ({
    type: 'ADD'
})

const _substract = () => ({
    type: 'SUBSTRACT'
})

//berfungsi memberikan delay 1 detik ketika couter ditambah atau dikurangin
export function incrementAsync() {
    return async (dispatch) => {
        //jika ingin mengunakan api
        // const response = await fetch('http://newsapi.org.......');
        // console.log(response);
        
        // dispatch({
        //     type: 'GET_DATA',
        //     payload: response.json()
        // })
        
        
        setTimeout(() => {
            dispatch(_add());
        }, 1000)
    }
}
;
export function decrementAsync() {
       return async (dispatch) => {
             
        setTimeout(() => {
            dispatch(_substract());
        }, 1000)
    }
}