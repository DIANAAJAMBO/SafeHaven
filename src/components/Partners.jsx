import React from 'react'

const Partners = () => {
    return (
        <div style={{ paddingBottom: '40px' }}>
            <div style={{ paddingTop: '30px', display:'flex', justifyContent:'space-evenly' }}>
                <h6 style={{ textAlign: 'center', marginLeft: '1%' }}>OUR SUPPORTERS</h6>
                <hr style={{ width: '70%', marginLeft:'10px' }} />
            </div>
            <div className='flex-container' style={{ flexWrap: 'wrap', display: 'flex', paddingTop: '10px', justifyContent: 'space-around' }}>
                <div className='' ><button >LOGO</button></div>
                <div className='' ><button >LOGO</button></div>
                <div className='' ><button >LOGO</button></div>
                <div className='' ><button >LOGO</button></div>
                <div className='' ><button >LOGO</button></div>
                <div className='' ><button >LOGO</button></div>
                
            </div>

        </div>
    )
}

export default Partners