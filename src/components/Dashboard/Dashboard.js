import React from 'react';
import { Bar, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Month Wise Sell</h2>
                                    <div>

                                        <LineChart width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                        </LineChart>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Month Wise Sell</h2>
                                    <div>

                                        <LineChart width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                        </LineChart>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Month Wise Sell</h2>
                                    <div>

                                        <LineChart width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 20,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                                            <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                                        </LineChart>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Month Wise Sell</h2>
                                    <div>

                                        <LineChart width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                        </LineChart>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Dashboard;