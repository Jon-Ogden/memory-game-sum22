function Row(props){
    const isEven = props.number % 2 === 0

    return (
        <tr>
            {isEven ? <td className='square light'></td> : null}
            <td className='square dark'></td>
            <td className='square light'></td>
            <td className='square dark'></td>
            <td className='square light'></td>
            <td className='square dark'></td>
            <td className='square light'></td>
            <td className='square dark'></td>
            {isEven ? null : <td className='square light'></td>}
        </tr>
    )
    };

export default Row;