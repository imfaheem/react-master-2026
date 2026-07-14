export const Cities = ()=> {
    
    const cities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];
    return (
        <div>
            {cities.map((cities, index) => (
                <p key={index}>{cities}</p>
            ))}
        </div>
    )
}
