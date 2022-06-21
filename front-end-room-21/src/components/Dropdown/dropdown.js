import './dropdown.css'

const region = [ 'Select your Region','West Midland', 'East Midland', 'London, North', 'North West','South West','South East', 'Yorkshire ']
const bootcamper = ['Select Bootcamper','Jessica ownes','Sasha Davis','Sandy beech','Jack Harlow', 'simon lee']
function Dropdown (){
    return(
        <div className = 'dropdown-bars'>
        <select
   name="region"
    className='dropdown-region'>
    {region.map((regions,index)=><option key={index}> {regions}
    </option>)}  
   </select>
 <select
   name="bootcampers"
    className='dropdown-bootcampers'>
    {bootcamper.map((bootcampers,index)=><option key={index}> {bootcampers}
    </option>)}  
   </select>
</div>
    )

}
export default Dropdown