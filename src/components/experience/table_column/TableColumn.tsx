import React, {FC} from 'react';
import styles from './TableColumn.module.css';
import TableSection from "@/components/experience/table_column/table_section/TableSection";
import {ITableData} from "@/components/interfaces/TableData";

interface ITableColumnProps {
    heading: string;
    data: ITableData[]
}

const TableColumn: FC<ITableColumnProps> = ({heading, data}) => {

    return (
        <div className={styles.table_column}>
            <div className={styles.column_heading}>
                {heading}
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