function Result({srcCode}) {
    return (
        <div>
            <div className="bg-white p-4 mt-12 ">
                
                <iframe
                    className="w-ful max-h-96 min-h-80 border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result