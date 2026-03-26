const stats = [
    {
        id: 1,
        title: "Total Downloads",
        value: "29.6M",
        subtitle: "21% More Than Last Month"
    },
    {
        id: 2,
        title: "Total Reviews",
        value: "906K",
        subtitle: "46% More Than Last Month"
    },
    {
        id: 3,
        title: "Active Apps",
        value: "132+",
        subtitle: "31 More Will Launch"
    }
];
const Stats = () => {
    return (
        <section className="bg-linear-to-r from-purple-600 to-indigo-500 py-12 px-4 -mt-12">

            <h3 className="text-4xl font-bold pb-4 text-center">Trusted by Millions, Built for You</h3>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card  */}
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
                    >
                        <p className="text-gray-500 text-sm mb-2">
                            {item.title}
                        </p>

                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                            {item.value}
                        </h2>

                        <p className="text-sm text-green-500">
                            {item.subtitle}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Stats;