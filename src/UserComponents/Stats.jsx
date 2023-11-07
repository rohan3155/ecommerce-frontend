import React from 'react'

const Stats = () => {
    return (
        <section className="bg-base-100">
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:py-16 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Trusted by eCommerce Businesses
                    </h2>

                    <p className="mt-4 text-gray-500 sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                        laborum labore provident impedit esse recusandae facere libero harum
                        sequi.
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl
                        className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
                    >
                        <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Total Sales
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                $1m
                            </dd>
                        </div>

                        <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Official Addons
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">31</dd>
                        </div>

                        <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">
                                Total Users
                            </dt>

                            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">240K</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Stats
