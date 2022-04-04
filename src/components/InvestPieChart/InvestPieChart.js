import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const InvestPieChart = () => {
    const data01 = [
        { name: 'month', value: 400 },
        { name: 'investment', value: 300 },
        { name: 'sell', value: 300 },
        { name: 'revenue', value: 200 },
    ];
    const data02 = [
        { name: 'Mar', value: 100 },
        { name: 'Apr', value: 300 },
        { name: 'May', value: 100 },
        { name: 'Jun', value: 80 },
        { name: 'July', value: 40 },
        { name: 'Aug', value: 30 },
        { name: 'Sep', value: 50 },
        { name: 'Oct', value: 100 },
        { name: 'Nov', value: 200 },
        { name: 'Dec', value: 150 },

    ];
    return (
        <div>
            <PieChart width={550} height={300}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default InvestPieChart;