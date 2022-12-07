import {MdOutlineEdit} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsSearch} from 'react-icons/bs';
import {FaProjectDiagram} from 'react-icons/fa';
import {GiVideoConference} from 'react-icons/gi';
import {AiOutlineEye,AiOutlineHome,AiOutlineDashboard,AiOutlineSetting} from 'react-icons/ai';

export const columns=[
   
    {
        id:1,
        name:"Customers",
        selector: row => row.customer,
    },
    {
        id:2,
        name:"Lead Id",
        selector: row => row.leadId,
    },
    {
        id:3,
        name:"Location",
        selector: row => row.location,
    },
    {
        id:4,
        name:"Event date",
        selector: row => row.event,
    },
    {
        id:5,
        name:"Status",
        selector: row => row.status,
    },
    {
        id:6,
        name:"Actions",
        selector:row=>row.actions.map((e)=>{return e})
    }
]

export const tableDataItems=[
    {
        id:1,
        customer:"Akash Kumar",
        leadId:"00765454",
        location:"Hydrebad",
        event:"2-8-2022",
        status:"New",
        actions:[
            // {
            //     disabled:false,
            //     icon:"<AiFillEye/>" 
               
            // },
            // {
            //     icon:"<MdModeEditOutline/>",
            //     disabled:true
            // },
            // {
            //     icon:"<MdDelete/>",
            //     disabled:true
            // },
            // {
            //     icon:"<BsSearch/>",
            //     disabled:false
            // }
            <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>
        ]

    },
    {
        id:2,
        customer:"Manohar K",
        leadId:"00765454",
        location:"Vijayawada",
        event:"2-8-2022",
        status:"pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:3,
        customer:"Raghavender",
        leadId:"00765454",
        location:"Banglore",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:4,
        customer:"Abishek K",
        leadId:"00765454",
        location:"Hydrebad",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:5,
        customer:"Udith Kumar",
        leadId:"00765454",
        location:"Pune",
        event:"2-8-2022",
        status:"Assigned to SP",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:6,
        customer:"Akash Kumar",
        leadId:"00765454",
        location:"Banglore",
        event:"2-8-2022",
        status:"New",
        actions:[
            <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>
        ]

    },
    {
        id:7,
        customer:"Manohar K",
        leadId:"00765454",
        location:"Hydrebad",
        event:"2-8-2022",
        status:"pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:8,
        customer:"Raghavender",
        leadId:"00765454",
        location:"Delhi",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:9,
        customer:"Abishek K",
        leadId:"00765454",
        location:"Banglore",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:10,
        customer:"Udith Kumar",
        leadId:"00765454",
        location:"Hydrebad",
        event:"2-8-2022",
        status:"Assigned to SP",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:11,
        customer:"Raghavender",
        leadId:"00765454",
        location:"Delhi",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    },
    {
        id:12,
        customer:"Abishek K",
        leadId:"00765454",
        location:"Banglore",
        event:"2-8-2022",
        status:"Pipeline",
        actions:[ <AiOutlineEye/>,<MdOutlineEdit/>,<RiDeleteBin6Line/>,<BsSearch/>]

    }
]
export const budgetRecords = [
    {
      id: 1,
      particulars: "Main Entry Gate (100'*36'*20')",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 1,
      particulars: "VIP Entry,Main Road,Second Entry",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 2,
      particulars: "Main Entry Gate (100'*36'*20')",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 3,
      particulars: "Passage 100'x30'",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 4,
      particulars: "VIP Passage & General Passage 250' + 250'",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 5,
      particulars: "Main Mandap and backdrop 150'x80'",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 6,
      particulars: "Water body Including",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 7,
      particulars: "Lounge 80 x 20",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    },
    {
      id: 8,
      particulars: "Thematic food courts 36'",
      uom: "NOS",
      qty: 2,
      rate: "1,200",
      Amount: "1,200"
    }
  ]
  export  const sidebarData=[
    {
        id:1,
        icon:<AiOutlineDashboard/>,
        title:"Dashboard",
        path:'/'
    },
    {
        id:2,
        icon:<AiOutlineHome/>,
        title:"Leads",
        path:'/leads'
    },
    {
        id:1,
        icon:<FaProjectDiagram/>,
        title:"Completed Projects",
        path:'/'
    },
    {
        id:1,
        icon:<GiVideoConference/>,
        title:"Scheduled Meetings",
        path:'/'
    },
    {
        id:1,
        icon:<AiOutlineSetting/>,
        title:"Settings",
        path:'/'
    }
   ]