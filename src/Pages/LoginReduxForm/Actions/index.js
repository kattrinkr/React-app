function emailChange (payload) {
    return {
        type: 'EMAIL_CHANGE',
        ...payload
    }
}

function passwordChange (payload) {
    return {
        type: 'PASSWORD_CHANGE',
        ...payload
    }
}

function submitter (payload) {
    return {
        type: 'SUBMITTER',
        ...payload
    }
}

export {emailChange, passwordChange, submitter}