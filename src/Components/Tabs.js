import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableComponent from './Table';
import {budgetRecords} from '../Services/Services'

function TabsComponent() {
  return (
    <Tabs defaultActiveKey="Decoration" id="tab" className="mb-3">
      <Tab eventKey="Decoration" title="Decoration">
        <Tabs defaultActiveKey="Decoration & Props" id="inner-tab">
          <Tab eventKey="Decoration & Props" title="Decoration & Props">
            <div className='budget-add d-flex justify-content-end'>
              <button className='btn-primary'>+ Add</button>

            </div>
            <TableComponent budgetRecords={budgetRecords} />
            <div className='actions d-flex justify-content-end mt-3'>
              <div>
                <button className='btn-secondary me-2'>Cancel</button>
                <button className='btn-primary'>Save</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Floral" title="Floral">No Data Found</Tab>
          <Tab eventKey="Logistics" title="Logistics">No Data Found</Tab>
          <Tab eventKey="Conceptual Lighting" title="Conceptual Lighting">No Data Found</Tab>
          <Tab eventKey="Sound" title="Sound">No Data Found</Tab>

        </Tabs>
      </Tab>
      <Tab eventKey="food" title="Food">
       No Data Found
      </Tab>
      <Tab eventKey="vas" title="VAS">
      No Data Found
      </Tab>
      <Tab eventKey="others" title="Others">
      No Data Found
      </Tab>
    </Tabs>
  );
}

export default TabsComponent;