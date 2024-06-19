import React, {FC} from 'react';
import styles from './TableColumn.module.css';
import TableSection from "@/components/experience/table_column/table_section/TableSection";
import {ITableData} from "@/components/interfaces/TableData";

interface ITableColumnProps {
    data: ITableData[]
}

const TableColumn: FC<ITableColumnProps> = ({data}) => {

    return (
        <div className={styles.table_column}>
            <div className={styles.column_heading}>
                Education
            </div>
            {
                data.map((data,index) => (
                    <TableSection key={index} date={data.date} heading={data.heading} description={data.description}/>
                ))
            }
        </div>
    );
};

export default TableColumn;