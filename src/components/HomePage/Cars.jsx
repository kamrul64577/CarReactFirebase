import SingleCars from "../shared/SingleCars";

const Cars = ({ data }) => {
  console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  mx-auto gap-4 px-16 py-16">

      {
        data.slice(0, 3).map(car => (
          <SingleCars key={car.id} car={car} />
        ))
      }
    </div>
  )
}

export default Cars
