export const ENUM_REQUEST_STATE = {
    FAILURE: 'enum_request_state_pending',
    PENDING: 'enum_request_state_pending',
    SUCCESS: 'enum_request_state_success',
}

export const requestStateUtil = {
    isFailure: state => state === ENUM_REQUEST_STATE.FAILURE,
    isPending: state => state === ENUM_REQUEST_STATE.PENDING,
    isSuccess: state => state === ENUM_REQUEST_STATE.SUCCESS,
}
