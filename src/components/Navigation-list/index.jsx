export const NavigationList = (props) => {
    const { datas, setCurrentIndex, detailKey, includeIndex, currentIndex } = props; 

    return (
        <ul>
            {datas && datas.map((itemData, index) => (
                <li key={index} 
                    className={currentIndex === index ? 'clicked' : ''}
                    onClick={() => { setCurrentIndex(index) }}
                >
                    {includeIndex ? <span>{index + 1}</span> : itemData[detailKey]}
                </li>
            ))}
        </ul>
    )
}

