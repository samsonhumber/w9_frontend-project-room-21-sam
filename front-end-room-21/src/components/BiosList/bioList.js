import Biography from '../Biography/biography.js'

export function BioList({bootcampers}) {
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
       
      </div>)
}


