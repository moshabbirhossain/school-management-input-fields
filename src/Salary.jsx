import React from 'react';
import { Input } from './components/ui/input';

const Salary = () => {
    return (
        <div style={{overflow: "hidden"}}>
            <h1 className="text-2xl font-bold mb-3">Salary</h1>
            <form className="border p-5 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <label htmlFor="Month" className="md:col-span-1">
                        Month
                        <Input type="date" id="month" required/>
                    </label>
                    <label htmlFor="Type" className="md:col-span-1">
                        Type
                        <Input type="text" id="type" required placeholder="Type"/>
                    </label>
                    <label htmlFor="Teacher ID" className="md:col-span-1">
                        Teacher ID
                        <Input type="number" required id="teacherID" placeholder="Teacher ID"/>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Salary;