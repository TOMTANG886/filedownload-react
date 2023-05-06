import exportFromJSON from 'export-from-json'

const data = [{ foo: 'foo1', bar: 'bar1', p: 'ppp1', why: 'why1'},{ p: 'ppp2',bar: 'bar2'},{ p: 'ppp'},{ why: 'why'}]
const fileName = 'download'
const exportType =  exportFromJSON.types.csv



const Export = () => {
    const handleClick = () =>{ 
        exportFromJSON({ data, fileName, exportType })
    }

    return(
        <>
            <button onClick={handleClick}>download</button>
        </>
    )
}

export default Export 