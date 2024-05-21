export const DataDisplay = (props) => {
    const {data, currentIndex, detailKey } = props

    return (
        <div>
            {data && data.length > 0 && (
                <div>
                    <h2>{data[currentIndex].name}</h2>
                    <p>{data[currentIndex][detailKey]}</p>
                </div>
            )}
        </div>
    )
}

