import { slice } from '../reducers/reducer'

const { setStatus } = slice.actions;

export const updateStatus = ( status ) => dispatch => {
    dispatch(setStatus( status ))
}