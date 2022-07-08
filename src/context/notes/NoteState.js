import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const noteInitial=[
          {
            "_id": "62c7b6d6da9c4560e6ccb8a4",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.150Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          },
          {
            "_id": "62c7b6d6da9c4560e6ccb8a6",
            "user": "62c668637f83538d533d6d12",
            "title": "My title",
            "description": "Sample description",
            "tag": "personal",
            "date": "2022-07-08T04:47:18.464Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(noteInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState