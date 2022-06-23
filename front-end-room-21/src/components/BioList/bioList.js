import Biography from '../Biography/biography.js'

export function BioList({bootcampers}) {
  if(bootcampers.length > 0) {
    return( <div className="bootcamper-display">
        {bootcampers.map((item) => (
            <Biography
            id={item.id}
            bcName={item.name}
            avatar={item.imagelink}
            region={item.region}
            jobTitle={item.jobtitle}
            desc={item.description}
            />
        )
          )  
        }  
      </div>
      )
    } else {
      console.log("No reslts for bootcampers")
      return <div className='bootcamper-display'>
      Sorry, we couldn't find anyone from School of Code based on your preferences
      </div>
    }
}


