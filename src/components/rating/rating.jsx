import './styles.css'
import { useState,useEffect } from 'react'

const Rating = ({ onSelect, rate }) => {
  const [selected, setSelected] = useState(rate || null);

 useEffect(() => {
   setSelected(rate || null);
 }, [rate]);

  return (
    <div
      style={{
        paddingTop: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}
      >
        <p className="agree left"
          style={{
            marginRight: '15px'
          }}
        >
          Strongly Disagree{' '}
        </p>
        <div className='ratingHolder' style={{}}>
        {[1, 2, 3, 4, 5].map(value => (
          <button
            key={value}
            className='rate'
            onClick={() => {
              setSelected(value)
              onSelect(value)
            }}
            style={{
              backgroundColor:
                selected === value
                  ? '#406edf'
                  : rate === value
                  ? '#406edf'
                  : '#FFFFFF',
              color:
                selected === value ? '#FFF' : rate === value ? '#FFF' : '#000',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontWeight: 'bold',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {String(value)}{' '}
          </button>
        ))}
        </div>
        <p className = "agree right"
          style={{
            alignItems: 'center'
            
          }}
        >
          Strongly Agree{' '}
        </p>{' '}
      </div>{' '}
    </div>
  )
}

export default Rating
