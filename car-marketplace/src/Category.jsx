import Data from '@/Shared/Data'
import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>

        <div>

            {Data.Category.map((category, index) => (
            <div key={category.id || index}> {/* Added key prop */}
                <img src={category.icon} width={40} height={40} />
                <h2>{category.name}</h2>
            </div>
    ))}

            {/* {Data.Category.map((category,index)=>(
                <div>
                    <img src={category.icon} width={40} height={40}/>
                </div>
            ))} */}
        </div>
    </div>
  )
}

export default Category