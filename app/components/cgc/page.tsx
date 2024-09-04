interface CardData {
    "Cert": string;
    "Card_Name": string;
    "Game": string;
    "Year": number;
    "Language": string;
    "Card_Set": string;
    "Card_Number": number;
    "Variant_1": string;
    "Grade": string;
    "Grader_Notes": string;
}

export default function Grading2({ Cert, Card_Name, Game, Year, Language, Card_Set, Card_Number, Variant_1, Grade, Grader_Notes }: CardData) {

    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Certification Number :-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Cert}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Card Name :-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Card_Name}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Game:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Game}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Year:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Year}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Language:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Language}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Card Set:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Card_Set}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Card Number:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Card_Number}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Variant 1:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Variant_1}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Grade:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Grade}</p>
            </div>

            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h2 className="mb-3 text-xl font-semibold">Grader Notes:-</h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">{Grader_Notes}</p>
            </div>
        </div>
    );
}
