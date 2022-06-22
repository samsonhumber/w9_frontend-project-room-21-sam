import Biography from '../Biography/biography.js'

export function BioList({bootcampers}) {
    return( <div className="bootcamper-display">
        {bootcampers.map((item) => (
          <Biography
            id={item.id}
            bcName={item.name}
            avatar={item.avatar}
            region={item.region}
            jobTitle={item.jobTitle}
            desc={item.desc}
          />
        )
        )
        }
       
      </div>)
}


