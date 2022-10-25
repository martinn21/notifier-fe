import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MessageForm from "./Components/MessageForm";
import MessageTable from "./Components/MessageTable";

export default function App() {
    return (
        <>
            <MessageForm />
            <MessageTable />
        </>
    )
}
