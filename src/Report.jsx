import React from 'react';
import { Input } from './components/ui/input';

const Report = () => {
    return (
        <div style={{overflow: "hidden"}}>
            <h1 className="text-2xl font-bold mb-3">Report</h1>
            <form className="border p-5 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <label htmlFor="Type" className="md:col-span-1">
                        Type
                        <Input type="text" id="type" required placeholder="Type"/>
                    </label>
                    <label htmlFor="Costing" className="md:col-span-1">
                    Costing
                        <Input type="number" id="osting" required placeholder="Costing"/>
                    </label>
                    <label htmlFor="Earning" className="md:col-span-1">
                    Earning
                        <Input type="number" id="earning" required placeholder="Earning"/>
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <label htmlFor="Profit" className="md:col-span-1">
                        Type
                        <Input type="number" id="profit" required placeholder="Profit"/>
                    </label>
                </div>
            </form>
        </div>
    );
};



export default Report;