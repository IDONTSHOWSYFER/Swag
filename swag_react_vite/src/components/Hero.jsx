export default function Hero() {

    return (
        <div className="relative items-center flex justify-center min-h-screen font-righteous">

            <video autoPlay loop muted className="h-full w-full absolute object-cover">
                <source src="/swag_animation.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 backdrop-blur-[4px] bg-black/25 bg-gradient-to-r from-[#f20cb560] via-transparent to-[#f20cb560]"></div>

            <div className="flex text-white flex-col justify-center items-center relative z-10">
                <h1 className="text-8xl mb-3">SWAG</h1>

                <div className="text-lime-400 text-3xl gap-4 flex">

                    <h2>
                        Discover
                    </h2>

                    <h2>
                        Collect
                    </h2>

                    <h2>
                        Flex
                    </h2>

                </div>
            </div>

        </div>
    );
}