import React from 'react'
import styles from "./Table/MessageTable.module.css";
import Table from "./Table";

export const GridTable = (props) => (
    <div className="form-group">
        <main className={styles.container}>
            <div className={styles.wrapper}>
                <Table data={props.data} rowsPerPage={4} />
            </div>
        </main>
    </div>
)

export default class CustomTable extends React.Component {
    constructor() {
        super()
        this.state = {
            collection: [],
        }
    }
    componentDidMount() {
        fetch('https://x9pjbaafwf.execute-api.us-west-1.amazonaws.com/dev/notification',
            {method: "GET"}
        )
        .then((response) => response.json())
        .then((res) => this.setState({ collection: res }))
    }
    render() {
        return (
            <div className="container mt-4">
                <GridTable
                    data={this.state.collection}
                />
            </div>
        )
    }
}