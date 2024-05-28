import { useEffect, useState } from "react"
import SingleCarsDashboard from "../../components/dashboard/SingleCarsDashboard";


const AllCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/cars`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleDeleteCar = (id) => {
        setCars( cars.filter((car) => car.id !== id ))
    }

    return (
        <>
            <h1 className="text-2xl p-8 m-8 font-bold text-center border bg-base-300">All Cars Sample</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 mb-16">

                {
                    cars.map(car =>
                        <SingleCarsDashboard key={car.id} car={car}  onDelete={handleDeleteCar}/>
                    )
                }


            </div>
        </>
    )
}

export default AllCars
