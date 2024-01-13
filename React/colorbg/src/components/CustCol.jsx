export default function CustCol({setColor}){
    return (
        <div className="flex items-center">
            <label htmlFor="color-picker" className="flex items-center"> Color </label>
            <input type="color" onChange={(e)=>setColor(e.target.value)} name="color-picker" id="color-picker" className="mx-2 rounded-xl"/>
        </div>
    )
}