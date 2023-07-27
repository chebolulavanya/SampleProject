import React, { Component } from 'react';
import ServieceModel from './servieceModal';

const AuthToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUHJvZmlsZSI6IntcImlkXCI6XCIyMzAyODA0Yi1lOGMwLTRhNDYtOTE2Yy1mNGQzYzlkOWJkMjBcIixcImZpcnN0TmFtZVwiOlwiTGF2YW55YVwiLFwibGFzdE5hbWVcIjpcIkNoZWJvbHVcIixcImVtYWlsXCI6XCJsYXZhbnlhLmNoZWJvbHVAYW16dXIuY29tXCIsXCJsb2dvVXJsXCI6XCJcIixcInBob25lXCI6XCIrOTE4ODk3MTE2NzA4XCIsXCJpc0FjdGl2ZVwiOnRydWUsXCJ1c2VyVHlwZVwiOntcInVzZXJUeXBlSWRcIjoyLFwidXNlclR5cGVOYW1lXCI6XCJFbGl0ZVwiLFwiaXNJbnRlcm5hbFVzZXJcIjp0cnVlfSxcInJvbGVzXCI6W3tcInJvbGVJZFwiOlwiZjk5N2RmYWEtNWQ1YS00YjQ2LWE2NTgtZTFjNTQ3YTExMzVhXCIsXCJyb2xlTmFtZVwiOlwiQWRtaW5cIn1dLFwiaXNFeHRlcm5hbFVzZXJcIjpmYWxzZSxcImVkb0ZpbGVOYW1lXCI6XCJcIixcInVzZXJOYW1lXCI6XCJsYXZhbnlhLmNoZWJvbHVAYW16dXIuY29tXCIsXCJjdXJyZW50QWdlbmN5SWRcIjo3MyxcImZ1bGxOYW1lXCI6XCJMYXZhbnlhIENoZWJvbHVcIixcImFnZW5jeVBob25lTWFwcGluZ0lkXCI6MCxcImNhbGVuZGFySWRcIjowLFwiZW1haWxTaWduYXR1cmVzXCI6W10sXCJmdWxsQWRkcmVzc1wiOlwiLCwsLFwiLFwiZXh0ZW5zaW9uXCI6XCJcIixcImhhc0hpcGFhQWNjZXNzXCI6ZmFsc2UsXCJpc1R3b0ZhY3RvckVuYWJsZVwiOmZhbHNlLFwiaXNIaXBhYUFnZW5jeVwiOnRydWUsXCJjcmVhdGVkT25cIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIixcInVwZGF0ZWRPblwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSIsInVuaXF1ZV9uYW1lIjoibGF2YW55YS5jaGVib2x1QGFtenVyLmNvbSIsInN1YiI6ImxhdmFueWEuY2hlYm9sdUBhbXp1ci5jb20iLCJqdGkiOiIxYWQ2NTgwNy0yOWY5LTExZWUtOTJkZS0wMjJmNWI2Mzk2NDkiLCJleHAiOjE2OTAyNzI0MzYsImlzcyI6Imh0dHBzOi8vdWF0Lm1hcHN0ZWNobm9sb2dpZXMuY29tLyIsImF1ZCI6Imh0dHBzOi8vdWF0Lm1hcHN0ZWNobm9sb2dpZXMuY29tLyJ9.PzPZjKF6J55TqtpPEM7F6o8CLfd7Ae4X0aqtYoooNfk";


export default class ServieceHeaders extends Component {


    ServieceHeaderGetApi = async (params, url,callback) =>
{
    // let jsonString = JSON.stringify(params)
    // body: jsonString
    fetch(url,{method: 'GET',headers: { 'Content-Type': 'application/json', 'Autherization': AuthToken }})
    .then((resp) => 
    {
        callback(null, resp)
    })
    // .then((json) =>{
    //     // callback(null, json)
    //     console.log(json)
    // })
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