const Picture = ({source,alt} ) => {
    if (!source) return null
    return (
        <div >
            <img src={source} alt="alt" className='w-5/6 rounded-md border-2 border-primaryContent mt-2'/>
        </div>
    )
}

export default Picture  