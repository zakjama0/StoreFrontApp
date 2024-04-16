import { useState } from "react";

const CustomerList = ({ customers }) => {
    const [open, setOpen] = useState(false);
    const mappedCustomers = customers.map((customer, index) => {
        return <p key={index}>{customer}</p>
    })

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={toggle}>View Customer List</button>
            {open && (
                <div className="toggle">
                    {mappedCustomers}
                </div>
            )}
        </div>
    );
}

export default CustomerList;