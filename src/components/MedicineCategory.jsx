/* eslint-disable react/prop-types */
export default function MedicineCategory({ medicinesData }) {
    const uniqueCategoriesMap = new Map();
    medicinesData.forEach(medicine => {
        if (!uniqueCategoriesMap.has(medicine.category)) {
            uniqueCategoriesMap.set(medicine.category, medicine.categoryDescription);
        }
    });

    const uniqueCategories = Array.from(uniqueCategoriesMap.entries()).map(([category, description]) => ({ category, description }));

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {uniqueCategories.map((categoryData, index) => (
                    <div key={index} className="bg-white border-2 border-green-300 rounded-lg p-4 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                        <h1 className="text-gray-800 font-bold text-lg mb-2">{categoryData.category}</h1>
                        <p className="text-gray-600">{categoryData.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
