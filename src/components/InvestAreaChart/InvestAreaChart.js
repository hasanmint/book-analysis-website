import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const InvestAreaChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 60000,
            "sell": 40000,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 30000,
            "sell": 50000,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 60000,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 60000,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 60000,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 60000,
            "revenue": 61000
        }
    ];

    return (
        <div>
            <AreaChart width={420} height={280} data={data}>
                <defs>
                    <linearGradient id="colorinvestment" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38CC77" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#38CC77" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorsell" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#38CC77" fillOpacity={1} fill="url(#colorinvestment)" />
                <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorsell)" />
            </AreaChart>
        </div>
    );
};

export default InvestAreaChart;