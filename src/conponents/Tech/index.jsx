const Tech =({ data}) => {

    return (
        <div>
            <div className="flex gap-x-2 text-sm">
                {
                    data.map((item, index) => (
                        <div key={`${item}-Tech-${index}`} className="bg-primaryContent px-2 py-1 rounded-md ">{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tech;