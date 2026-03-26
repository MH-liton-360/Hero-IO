const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center py-8 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {heading}
            </h2>
            <p className="text-gray-600 text-sm">
                {subHeading}
            </p>
        </div>
    );
};

export default SectionTitle;