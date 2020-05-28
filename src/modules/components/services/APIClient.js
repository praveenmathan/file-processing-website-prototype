import axios from 'axios';

/* eslint-disable */
const instance = axios.create({
    baseURL: 'https://at5l6up8rh.execute-api.us-east-1.amazonaws.com',
    headers: {
        'content-type': 'application/json'
    },
});

export default {
    getData: () =>
        instance({
            'method': 'GET',
            'url': '/Test-new/transactionLambdaFunction/basic-transaction',
            'params': {
                'transactionId': '34',
                'type': 'secret',
                'amount': '500'
            },
        }),
    postData: () =>
        instance({
            'method': 'POST',
            'url': '/api',
            'data': {
                'item1': 'data1',
                'item2': 'item2'
            },
            'headers': {
                'content-type': 'application/json'  // override instance defaults
            }
        })
}
