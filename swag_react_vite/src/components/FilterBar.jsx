export default function FilterBar({ category, setCategory, maxPrice, setMaxPrice }) {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4">

            {/* Category Filter */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-black border border-lime-400 text-lime-400 font-righteous ml-25"
            >
                <option value="all">All Categories</option>
                <option value="shoes">Shoes</option>
                <option value="clothes">Clothes</option>
                <option value="accessories">Accessories</option>
            </select>
{/* Price Slider */}
<div className="flex flex-col w-full md:w-1/2 items-center">
    <label className="text-pink-500 font-righteous mb-1">
        Max Price: ${maxPrice}
    </label>

    <input
        type="range"
        min="0"
        max="1000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        className="accent-lime-400"
        style={{
            width: "60%",     // ← moins long
            height: "7px",
            cursor: "pointer",
        }}
    />
</div>
        </div>
    );
}