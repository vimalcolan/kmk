import React from 'react'
import Table from 'react-bootstrap/Table';


const TableComponent = ({budgetRecords}) => {
  return (
    <div className='table-component'>
        <Table responsive>
            <thead>
                <tr>
                    <th>Particulars</th>
                    <th>UOM</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
               {
                budgetRecords.map((e,i)=>{
                    return(
                        <tr key={i}>
                            <td>{e.particulars}</td>
                            <td><input type="text" value={e.uom}/></td>
                            <td><input type="text" value={e.qty}/></td>
                            <td><input type="text" value={e.rate}/></td>
                            <td><input type="text" value={e.Amount}/></td>
                        </tr>
                    )
                })
               }
               <tr className='price'>
                <td colSpan={4}>Total</td>
                <td>Rs.50,000</td>
               </tr>
               <tr className='price total-price'>
                <td colSpan={4}>Grand Total</td>
                <td>Rs.20,00,000</td>
               </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default TableComponent;