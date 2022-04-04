import React from 'react';
import InvestAreaChart from '../InvestAreaChart/InvestAreaChart';
import InvestBarChart from '../InvestBarChart/InvestBarChart';
import InvestLineChart from '../InvestLineChart/InvestLineChart';
import InvestPieChart from '../InvestPieChart/InvestPieChart';


const Dashboard = () => {


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
                                        <InvestLineChart></InvestLineChart>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Investment Vs Revenue</h2>
                                    <div>
                                        <InvestAreaChart></InvestAreaChart>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Investment Vs Revenue</h2>
                                    <div>
                                        <InvestBarChart></InvestBarChart>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 uppercase text-teal-400">Investment Vs Revenue</h2>
                                    <div>
                                        <InvestPieChart></InvestPieChart>

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