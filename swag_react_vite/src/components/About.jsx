export default function About() {
    return (
        <>
            <div className="relative items-center justify-items-center grid grid-cols-2 grid-rows-2 min-h-screen font-righteous">
                <div className="w-4/5 h-4/5 rounded-2xl bg-black col-start-1 row-start-1 justify-center items-center"></div>
                <div className="w-4/5 h-4/5 rounded-2xl bg-white col-start-2 row-start-1 justify-center items-center"></div>
                <div className="w-4/5 h-4/5 rounded-2xl bg-white col-start-1 row-start-2 justify-center items-center"></div>
                <div className="w-4/5 h-4/5 rounded-2xl bg-white col-start-2 row-start-2 justify-center items-center"></div>
            </div>
        </>
    )
}