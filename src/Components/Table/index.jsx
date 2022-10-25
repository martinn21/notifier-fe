import React, { useState } from "react";

import MessageTable from "../../Hooks/MessageTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = MessageTable(data, page, rowsPerPage);
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                <tr>
                    <th className={styles.tableHeader}>PK</th>
                    <th className={styles.tableHeader}>TimeDelivery</th>
                    <th className={styles.tableHeader}>Message</th>
                    <th className={styles.tableHeader}>User</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((el, i) => (
                    // <tr className={styles.tableRowItems} key={el.id}>
                    <tr className={styles.tableRowItems} key={i++}>
                        <td className={styles.tableCell}>{el.pk}</td>
                        <td className={styles.tableCell}>{el.timeDelivery}</td>
                        <td className={styles.tableCell}>{el.message}</td>
                        <td className={styles.tableCell}>{JSON.stringify(el.user)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default Table;