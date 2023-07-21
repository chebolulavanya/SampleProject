import React, { Component } from 'react';
import ServieceModel from './servieceModal';


export default class ServieceHeaders extends Component {


    ServieceHeaderGetApi = async (params, url,callback) =>
{
    // let jsonString = JSON.stringify(params)
    // body: jsonString
    fetch(url,{method: 'GET',headers: { 'Content-Type': 'application/json' }})
    .then((resp) => 
    {
        callback(null, resp)
    })
    .catch((error) => {
        callback(error,null)
    }
    );

}

ServieceHeaderPostApi = async (params, url,callback) =>
{
    let jsonString = JSON.stringify(params)
    // body: jsonString
    fetch(url,{method: 'POST',headers: { 'Content-Type': 'application/json' },body: jsonString})
    .then((resp) => 
    {
        callback(null, resp)
    })
    .catch((error) => {
        callback(error,null)
    }
    );

}

ServieceHeaderDeleteApi = async (params, url,callback) =>
{
    let jsonString = JSON.stringify(params)
    // body: jsonString
    fetch(url,{method: 'DELETE',headers: { 'Content-Type': 'application/json' },body: jsonString})
    .then((resp) => 
    {
        callback(null, resp)
    })
    .catch((error) => {
        callback(error,null)
    }
    );

}

ServieceHeaderPutApi = async (params, url,callback) =>
{
    let jsonString = JSON.stringify(params)
    // body: jsonString
    fetch(url,{method: 'PUT',headers: { 'Content-Type': 'application/json' },body: jsonString})
    .then((resp) => 
    {
        callback(null, resp)
    })
    .catch((error) => {
        callback(error,null)
    }
    );

}

}