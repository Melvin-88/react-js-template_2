import * as types from './constants.jsx';

export function getSimulation(data) {
    return {
        type: types.SIMULATION,
        payload: {
            request: {
                url: `/api/v0/simulation/`,
                method: "post",
                data
            }
        }
    };
}