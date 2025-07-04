import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Tutors = () => {

  const { speciality } = useParams()

  const [filterTut, setFilterTut] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { tutors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterTut(tutors.filter(tut => tut.speciality === speciality))
    } else {
      setFilterTut(tutors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [tutors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the tutors .</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Maths' ? navigate('/tutors') : navigate('/tutors/Maths')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Maths' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Maths</p>
          <p onClick={() => speciality === 'Chemistry' ? navigate('/tutors') : navigate('/tutors/Chemistry')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Chemistry' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Chemistry</p>
          <p onClick={() => speciality === 'Physics' ? navigate('/tutors') : navigate('/tutors/Physics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Physics' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Physics</p>
          <p onClick={() => speciality === 'Aptitude' ? navigate('/tutors') : navigate('/tutors/Aptitude')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Aptitude' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Aptitude</p>
          <p onClick={() => speciality === 'Gate' ? navigate('/tutors') : navigate('/tutors/Gate')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gate' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gate</p>
          <p onClick={() => speciality === 'Biology' ? navigate('/tutors') : navigate('/tutors/Biology')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Biology' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Biology</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterTut.map((item, index) => (
            <div onClick={() => { navigate(`/sessions/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tutors