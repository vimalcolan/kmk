import React,{useState,useCallback} from 'react'
import DataTable from 'react-data-table-component';
import {columns,tableDataItems} from '../Services/Services'
const DataTableComponent = () => {
    const [data, setData] = useState(tableDataItems);
    const [selectedRows, setSelectedRows] = useState([]);
	const [toggleCleared, setToggleCleared] = useState(false);
	const handleRowSelected = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	
  return (
  
    <DataTable
   columns={columns}
   data={data}
   selectableRows
   onSelectedRowsChange={handleRowSelected}
   clearSelectedRows={toggleCleared}
/>
  
  )
}

export default DataTableComponent











