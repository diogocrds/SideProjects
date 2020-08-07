import React, { useState } from 'react'
import Class from './Class'

/*const ClassesContext = {
  none: null,
  deathknight: {
    specs: ['frost', 'unholy', 'blood'],
  },
  demonhunter: {
    specs: ['havoc', 'vengeance'],
  },
}*/
function Classes() {
  const [singleClass, setSingleClass] = useState('')

  const classTable = (
    <div className='classes'>
      <h3>Classes</h3>
      <div className='classes__item'>
        <div className='name'>Death Knight</div>
        <div className='specs'>
          <span onClick={() => setSingleClass('Blood')}>Blood</span>
          <span onClick={() => setSingleClass('Frost')}>Frost</span>
          <span onClick={() => setSingleClass('Unholy')}>Unholy</span>
        </div>
      </div>
      <div className='classes__item'>
        <div className='name'>Demon Hunter</div>
        <div className='specs'>
          <span onClick={() => setSingleClass('Vengeance')}>Vengeance</span>
          <span onClick={() => setSingleClass('Havoc')}>Havoc</span>
        </div>
      </div>
      <div className='classes__item'>
        <div className='name'>Druid</div>
        <div className='specs'>
          <span onClick={() => setSingleClass('Balance')}>Balance</span>
          <span onClick={() => setSingleClass('Guardian')}>Guardian</span>
          <span onClick={() => setSingleClass('Restoration')}>Restoration</span>
          <span onClick={() => setSingleClass('Feral')}>Feral</span>
        </div>
      </div>
    </div>
  )
  return (
    <div className='class__content'>
      {singleClass ? (
        <>
          <Class name={singleClass} />{' '}
          <button onClick={() => setSingleClass(null)} className='btn__back'>
            Back
          </button>
        </>
      ) : (
        classTable
      )}{' '}
    </div>
  )
}

export default Classes
