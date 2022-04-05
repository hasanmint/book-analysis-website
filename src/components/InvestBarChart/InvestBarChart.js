import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const InvestBarChart = () => {
    const data = [
        {
            month: 'Mar',
            investment: 4000,
            sell: 2400,
            revenue: 2400,
        },
        {
            month: 'Apr',
            investment: 3000,
            sell: 1398,
            revenue: 2210,
        },
        {
            month: 'May',
            investment: 2000,
            sell: 9800,
            revenue: 2290,
        },
        {
            month: 'Jun',
            investment: 2780,
            sell: 3908,
            revenue: 2000,
        },
        {
            month: 'Jul',
            investment: 1890,
            sell: 4800,
            revenue: 2181,
        },
        {
            month: 'Aug',
            investment: 2390,
            sell: 3800,
            revenue: 2500,
        },

    ];

    return (
        <div>
            <BarChart
                width={420}
                height={280}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default InvestBarChart;